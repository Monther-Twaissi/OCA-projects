@extends('layouts.shopTemp')

@section('shop_content')
    

<div class="breadcrumbs-area position-relative">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <div class="breadcrumb-content position-relative section-content">
          <h3 class="title-3">Shop Sidebar</h3>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li>Shop</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Breadcrumb Area End Here -->
<!-- Shop Main Area Start Here -->
<div class="shop-main-area">
  <div class="container container-default custom-area">
    <div class="row flex-row-reverse">
      <div class="col-lg-9 col-12 col-custom widget-mt">
        <!--shop toolbar start-->
        <div class="shop_toolbar_wrapper mb-30">
          <div class="shop_toolbar_btn">
            <button
              data-role="grid_3"
              type="button"
              class="active btn-grid-3"
              title="Grid"
            >
              <i class="fa fa-th"></i>
            </button>
            <button
              data-role="grid_list"
              type="button"
              class="btn-list"
              title="List"
            >
              <i class="fa fa-th-list"></i>
            </button>
          </div>
         
        </div>
        <!--shop toolbar end-->
        <!-- Shop Wrapper Start -->
      
        <div class="row shop_wrapper grid_3">
          @foreach ($catProducts as $catproduct =>$value)
         
          <div class="col-md-6 col-sm-6 col-lg-4 col-custom product-area">
            <div class="product-item"> 
              <div class="single-product position-relative mr-0 ml-0">
                <div class="product-image" style="height:20rem">
                  <a class="d-block" href="product-details.html">
                    <img  
                      src="/images/{{$value->product_image}}"
                      alt=""
                      class="product-image-1 w-100"
                      style="height:20rem"
                    />      
                  </a>               
                </div>
                <div class="product-content">
                  <div class="product-title">
                    <h4 class="title-2">
                      <a href="product-details.html"
                        >{{$value->product_name}}</a
                      >
                    </h4>
                  </div>
                 
                  <div class="price-box">
                    <span class="regular-price">JOD {{$value->product_price}}</span>
                  </div>
                  <a href="cart.html" class="btn product-cart"
                    >Add to Cart</a
                  >
                </div>
                <div class="product-content-listview">
                  <div class="product-title">
                    <h4 class="title-2">
                      <a href="product-details.html"
                        >{{$value->product_name}}</a
                      >
                    </h4>
                  </div>
                </div>
              </div>
            </div>        
          </div>
          @endforeach
        </div>
     
        <!-- Shop Wrapper End -->
        <!-- Bottom Toolbar Start -->
        <div class="row">
          <div class="col-sm-12 col-custom">
            <div class="toolbar-bottom">
              <div class="pagination">
                <ul>
                  <li class="current">1</li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li class="next"><a href="#">next</a></li>
                  <li><a href="#">&gt;&gt;</a></li>
                </ul>
              </div>
              <p class="desc-content text-center text-sm-right mb-0">
                Showing 1 - 12 of 34 result
              </p>
            </div>
          </div>
        </div>
        <!-- Bottom Toolbar End -->
      </div>
      <div class="col-lg-3 col-12 col-custom">
        <!-- Sidebar Widget Start -->
        <aside class="sidebar_widget widget-mt">
          <div class="widget_inner">
            <div class="widget-list widget-mb-1">
              <h3 class="widget-title">Search</h3>
              <div class="search-box">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search Our Store"
                    aria-label="Search Our Store"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="widget-list widget-mb-1">
              <h3 class="widget-title">Menu Categories</h3>
              <!-- Widget Menu Start -->
              <nav>
          
              </nav>
              <!-- Widget Menu End -->
            </div>
            <div class="widget-list widget-mb-1">
              <h3 class="widget-title">Price Filter</h3>
              <!-- Widget Menu Start -->
              <form action="#">
                <div id="slider-range"></div>
                <button type="submit">Filter</button>
                <input type="text" name="text" id="amount" />
              </form>
              <!-- Widget Menu End -->
            </div>
            <div class="widget-list widget-mb-1">
              <h3 class="widget-title">Categories</h3>
              <div class="sidebar-body">
                <ul class="sidebar-list">
                  <li><a href="#">All Product</a></li>
                  <li><a href="#">Best Seller (5)</a></li>
                  <li><a href="#">Featured (4)</a></li>
                  <li><a href="#">New Products (6)</a></li>
                </ul>
              </div>
            </div>
            <div class="widget-list widget-mb-2">
              <h3 class="widget-title">Color</h3>
              <div class="sidebar-body">
                <ul class="checkbox-container categories-list">
                  <li>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck12"
                      />
                      <label
                        class="custom-control-label"
                        for="customCheck12"
                        >black (20)</label
                      >
                    </div>
                  </li>
                  <li>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck13"
                      />
                      <label
                        class="custom-control-label"
                        for="customCheck13"
                        >red (6)</label
                      >
                    </div>
                  </li>
                  <li>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck14"
                      />
                      <label
                        class="custom-control-label"
                        for="customCheck14"
                        >blue (8)</label
                      >
                    </div>
                  </li>
                  <li>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck11"
                      />
                      <label
                        class="custom-control-label"
                        for="customCheck11"
                        >green (5)</label
                      >
                    </div>
                  </li>
                  <li>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck15"
                      />
                      <label
                        class="custom-control-label"
                        for="customCheck15"
                        >pink (4)</label
                      >
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="widget-list widget-mb-3">
              <h3 class="widget-title">Tags</h3>
              <div class="sidebar-body">
                <ul class="tags">
                  <li><a href="#">Rose</a></li>
                  <li><a href="#">Sunflower</a></li>
                  <li><a href="#">Tulip</a></li>
                  <li><a href="#">Lily</a></li>
                  <li><a href="#">Smart</a></li>
                  <li><a href="#">Modern</a></li>
                  <li><a href="#">Gift</a></li>
                </ul>
              </div>
            </div>
            <div class="widget-list mb-0">
              <h3 class="widget-title">Recent Products</h3>
              <div class="sidebar-body">
                <div class="sidebar-product align-items-center">
                  <a href="product-details.html" class="image">
                    <img src="assets/images/cart/1.jpg" alt="product" />
                  </a>
                  <div class="product-content">
                    <div class="product-title">
                      <h4 class="title-2">
                        <a href="product-details.html">Glory of the Snow</a>
                      </h4>
                    </div>
                    <div class="price-box">
                      <span class="regular-price">$80.00</span>
                      <span class="old-price"><del>$90.00</del></span>
                    </div>
                    <div class="product-rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-o"></i>
                      <i class="fa fa-star-o"></i>
                    </div>
                  </div>
                </div>
                <div class="sidebar-product align-items-center">
                  <a href="product-details.html" class="image">
                    <img src="assets/images/cart/2.jpg" alt="product" />
                  </a>
                  <div class="product-content">
                    <div class="product-title">
                      <h4 class="title-2">
                        <a href="product-details.html"
                          >Pearly Everlasting</a
                        >
                      </h4>
                    </div>
                    <div class="price-box">
                      <span class="regular-price">$50.00</span>
                      <span class="old-price"><del>$60.00</del></span>
                    </div>
                    <div class="product-rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-half-o"></i>
                      <i class="fa fa-star-o"></i>
                    </div>
                  </div>
                </div>
                <div class="sidebar-product align-items-center">
                  <a href="product-details.html" class="image">
                    <img src="assets/images/cart/3.jpg" alt="product" />
                  </a>
                  <div class="product-content">
                    <div class="product-title">
                      <h4 class="title-2">
                        <a href="product-details.html"
                          >Jack in the Pulpit</a
                        >
                      </h4>
                    </div>
                    <div class="price-box">
                      <span class="regular-price">$40.00</span>
                      <span class="old-price"><del>$50.00</del></span>
                    </div>
                    <div class="product-rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-half-o"></i>
                      <i class="fa fa-star-half-o"></i>
                      <i class="fa fa-star-o"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <!-- Sidebar Widget End -->
      </div>
    </div>
  </div>
</div>
@endsection