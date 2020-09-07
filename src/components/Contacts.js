import React, { Component } from "react";
import Contact from "./contact";
import maleImg from "../img/male.svg";
import femaleImg from "../img/female.svg";
import unknownImg from "../img/unknown.svg";

const contacts = [
    {
        firstName: "Барней",
        lastName: "Стинсовський",
        phone: "+380956319521",
        gender: "male",
        male: true,
        female: false,
        notSpecified: false,
    },
    {
        firstName: "Робін",
        lastName: "Щербатська",
        phone: "+380931460123",
        gender: "female",
        male: false,
        female: true,
        notSpecified: false,
    },
    {
        firstName: "Анонімний",
        lastName: "Анонімус",
        phone: "+380666666666",
        male: false,
        female: false,
        notSpecified: true,
    },
    {
        firstName: "Лілія",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female",
        male: false,
        female: true,
        notSpecified: false,
    },
    {
        firstName: "Маршен",
        lastName: "Еріксонян",
        phone: "+380739432123",
        gender: "male",
        male: true,
        female: false,
        notSpecified: false,
    },
    {
        firstName: "Теодор",
        lastName: "Мотсбес",
        phone: "+380956319526",
        gender: "male",
        male: true,
        female: false,
        notSpecified: false,
    },
];

export default class Contacts extends Component {
    state = {
        contacts: [...contacts],
        search: "",
        male: true,
        female: true,
        notSpecified: true,
    };

    handleSearchChange = (e) => {
        this.setState({
            search: e.target.value,
            contacts: contacts.filter((el) => {
                return (
                    el.firstName
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase()) ||
                    el.lastName.includes(e.target.value.toLowerCase()) ||
                    el.phone.toString().includes(e.target.value)
                );
            }),
        });
    };

    addGenderImg = (contact) => {
        if (contact.gender === "male") {
            return maleImg;
        } else if (contact.gender === "female") {
            return femaleImg;
        } else {
            return unknownImg;
        }
    };

    handleMaleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.checked,
            contacts: contacts.filter((el) => {
                return (
                    el.male.toString().includes(`${!this.state.male}`) ||
                    el.female.toString().includes(`${this.state.female}`) ||
                    el.notSpecified
                        .toString()
                        .includes(`${this.state.notSpecified}`)
                );
            }),
        });
    };

    handleFemaleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.checked,
            contacts: contacts.filter((el) => {
                return (
                    el.male.toString().includes(`${this.state.male}`) ||
                    el.female.toString().includes(`${!this.state.female}`) ||
                    el.notSpecified
                        .toString()
                        .includes(`${this.state.notSpecified}`)
                );
            }),
        });
    };

    handleNotSpecifiedChange = (e) => {
        this.setState({
            [e.target.name]: e.target.checked,
            contacts: contacts.filter((el) => {
                return (
                    el.male.toString().includes(`${this.state.male}`) ||
                    el.female.toString().includes(`${this.state.female}`) ||
                    el.notSpecified
                        .toString()
                        .includes(`${!this.state.notSpecified}`)
                );
            }),
        });
    };

    render() {
        return (
            <div className="contacts-wrapper">
                <input
                    type="text"
                    id="search"
                    placeholder="Search"
                    value={this.state.search}
                    onChange={this.handleSearchChange}
                />
                <div className="checkboxes">
                    <label htmlFor="male">
                        <input
                            type="checkbox"
                            name="male"
                            id="male"
                            checked={this.state.male}
                            onChange={this.handleMaleChange}
                        />
                        Male
                    </label>
                    <label htmlFor="female">
                        <input
                            type="checkbox"
                            name="female"
                            id="female"
                            checked={this.state.female}
                            onChange={this.handleFemaleChange}
                        />
                        Female
                    </label>
                    <label htmlFor="notSpecefied">
                        <input
                            type="checkbox"
                            name="notSpecified"
                            id="notSpecefied"
                            checked={this.state.notSpecified}
                            onChange={this.handleNotSpecifiedChange}
                        />
                        Not specified
                    </label>
                </div>
                {this.state.contacts.map((contact) => {
                    return (
                        <Contact
                            firstName={contact.firstName}
                            lastName={contact.lastName}
                            phone={contact.phone}
                            gender={this.addGenderImg(contact)}
                            key={contact.phone}
                        />
                    );
                })}
            </div>
        );
    }
}
