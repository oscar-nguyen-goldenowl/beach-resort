import React, { Component } from 'react';
import Title from "./Title";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "Free cocktails",
                info: "Cocktails is very good!"
            },
            {
                icon: <FaHiking/>,
                title: "Endless Hiking",
                info: "Hiking ...!"
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free ShuttleVan",
                info: "ShuttleVan ...!"
            },
            {
                icon: <FaBeer/>,
                title: "Strongest Beer",
                info: "Beer ...!"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map( (item, index) => {
                        return( 
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        );
    }
}

export default Services;