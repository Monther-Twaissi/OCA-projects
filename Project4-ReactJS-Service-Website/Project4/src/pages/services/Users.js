import React, { Component } from "react";
import UserItem from "./UserItem";
import Gallery from "./Gallery";

class Users extends Component {
  state = {
    users: [
      {
        id: "Wep-App-Development",
        service: "Wep App Development",
        avatar_url:
          "https://media.discordapp.net/attachments/783242964762624015/785564374462758922/undraw_progressive_app_m9ms.png?width=805&height=476",
        html_url: "/details/Wep-App-Development",
      },
      {
        id: "Mobile-App-Development",
        service: "Mobile App Development",
        avatar_url:
          "https://media.discordapp.net/attachments/783242964762624015/785564398487470080/undraw_file_sync_ot38.png?width=701&height=476",

        html_url: "/details/Mobile-App-Development",
      },
      {
        id: "Complete-software-development-outsourcing",
        service: "Development Outsourcing",
        avatar_url:
          "https://media.discordapp.net/attachments/783242964762624015/785564995412819968/undraw_Mind_map_re_nlb6.png?width=750&height=476",

        html_url: "/details/Complete-software-development-outsourcing",
      },
      {
        id: "Software-support-and-evolution",
        service: "Software Support",
        avatar_url:
          "https://media.discordapp.net/attachments/783242964762624015/785565058368929792/undraw_chat_bot_kli5.png?width=789&height=476",
        html_url: "/details/Software-support-and-evolution",
      },
      {
        id: "Software-Consulting",
        service: "Software Consulting",
        avatar_url:
          "https://media.discordapp.net/attachments/783242964762624015/785565113469370428/undraw_software_engineer_lvl5.png?width=671&height=476",

        html_url: "/details/Software-Consulting",
      },
      {
        id: "Development-team-augmentation",
        service: "Team Augmentation",
        avatar_url:
          "https://media.discordapp.net/attachments/783242964762624015/785565180435234916/undraw_code_review_l1q9.png?width=640&height=476",
        html_url: "/details/Development-team-augmentation",
      },
    ],
  };
  render() {
    return (
      <div>
        <Gallery />
        <h1 style={{ marginTop: "2rem", color: "#583D72" }}>Our Services</h1>
        <div className="serviceItem">
          {this.state.users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
}

export default Users;

