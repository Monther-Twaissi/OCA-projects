from django.shortcuts import render,redirect
from django.db.models import Count


from .models import Teacher, DataSet, DataSource
from project8.resources import DataResource

import os
from tablib import Dataset
from datetime import datetime
import time

from django.contrib.auth.decorators import login_required

import csv

# Pages 
@login_required(login_url='admin/login')
def index(request):
    posts   = Teacher.objects.all().values('speciality').annotate(total=Count('speciality')).order_by('total')
    gender  = Teacher.objects.all().values('gender').annotate(total=Count('gender')).order_by('total')
    address = Teacher.objects.all().values('address').annotate(total=Count('address')).order_by('total')
    dataset = Teacher.objects.all().values('dataset').annotate(total=Count('dataset')).order_by('total')
    context = {
        'data': posts,
        'gen' : gender,
        'address': address,
        'dataset':dataset
    }
    return render(request, 'pages/index.html', context)

@login_required(login_url='admin/login')
def invoice(request):
    return render(request,'pages/invoice.html')
@login_required(login_url='admin/login')
def projects(request):
    return render(request,'pages/projects.html')

@login_required(login_url='admin/login')
def tables(request):
    # list_obj=[]
    # people = Teacher.objects.raw("SELECT * FROM project8_teacher WHERE gender ='ذكر'")
    # return  render(request, 'pages/tables.html', {'people': people })
    teachers = Teacher.objects.all()
    return render(request,"pages/tables.html",
    {'teachers':teachers})  


def testdata(request):
    posts = Teacher.objects.all().values('speciality').annotate(total=Count('speciality')).order_by('total')
    context = {
        'data': posts,
    }
    return render(request, 'project8/index.html', context)


#End  Pages 

## functions

@login_required(login_url='admin/login')
def import_data(request):
    error = ''
    datasource = DataSource.objects.all()
    # print(request.FILES['file'])
    if request.method == 'POST':
        file = request.FILES['file']
        option = request.POST['option']
        start_time = time.time()
        dataset_obj1 = DataSet()
        dataset_obj1.date = datetime.today().strftime('%Y-%m-%d')
        dataset_obj1.file_name = file.name
        dataset_obj1.execution_time = start_time
        dataset_obj1.num_of_records = 0
        dataset_obj1.source_id = option
        dataset_obj1.save()
        last_id = DataSet.objects.last()
        if request.FILES['file'].name.split('.')[1] == 'xlsx':
            resource_teacher = DataResource()
            dataset = Dataset()
            file = request.FILES['file']
            imported_data = dataset.load(file.read(), format='xlsx')
            record_num = 0
            for col in imported_data:
                if col[2] is None:
                    dataset_obj2 = DataSet.objects.get(id=last_id.id)
                    dataset_obj2.execution_time = round((time.time()-start_time), 4)
                    dataset_obj2.num_of_records = record_num
                    dataset_obj2.save()
                    return redirect('/tables')
                value = Teacher(
                    col[0],
                    col[1],
                    col[2],
                    col[3],
                    col[4],
                    col[5],
                    col[6],
                    col[7],
                    col[8],
                    col[9],
                    last_id.id
                )
                value.save()
                record_num += 1
            dataset_obj2 = DataSet.objects.get(id=last_id.id)
            dataset_obj2.execution_time = round((time.time()-start_time), 4)
            dataset_obj2.num_of_records = record_num
            dataset_obj2.save()
            return redirect('/tables')
        elif request.FILES['file'].name.split('.')[1] == 'csv':
            resource_teacher = DataResource()
            dataset = Dataset()
            file = request.FILES['file']
            imported_data = dataset.load(file.read().decode(), format='csv')
            record_num = 0
            for col in imported_data:
                value = Teacher(
                    col[0],
                    col[1],
                    col[2],
                    col[3],
                    col[4],
                    col[5],
                    col[6],
                    col[7],
                    col[8],
                    col[9],
                    last_id.id
                )
                record_num += 1
                value.save()
            dataset_obj2 = DataSet.objects.get(id=last_id.id)
            dataset_obj2.execution_time = round((time.time()-start_time), 4)
            dataset_obj2.num_of_records = record_num
            dataset_obj2.save()
            return redirect('/tables')
        else:
            error = 'Invalid input, Pleases make sure to put either CSV or XLSX'
    return render(request, 'pages/form_upload.html', {'datasource': datasource, 'error': error})

# teachers =  Teacher.objects.filter(name__contains=request.POST["search_string"])
#     return  render(request, 'pages/tables.html', {'teachers': teachers})
# def search(request):
#     searchString=request.POST['search_string']
#     list_obj=[]
#     people = Teacher.objects.raw("SELECT * FROM project8_teacher WHERE NID like %{"+ searchString +"}% || full_name like %{"+searchString+"}%|| address like %{"+searchString+"}%|| subject like %{"+searchString+"}%")
   
#     for p in people:
#         list_obj.append(p)
#     return  render(request, 'pages/tables.html', {'list_obj': list_obj,'isSearch':True})

def search(request):
    
    list_obj=[]
    people = Teacher.objects.raw("SELECT * FROM project8_teacher WHERE gender ='ذكر'")
    return  render(request, 'pages/tables.html', {'people': people })
# Create your views here.
