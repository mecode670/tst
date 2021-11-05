import React from 'react'
import {employee} from '../../json/members.json'
import TeamMembers from './TeamMembersModel'
const About = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <div className="text-center pb-12">
        <h2 className="text-base font-bold text-indigo-600">
            We have the best equipment
        </h2>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Check our awesome team members
        </h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {
        employee.map((element) => {
           return <TeamMembers key={element.id} name={element.name} work={element.work} image={element.image} />
        })
    }
    </div>
        </section>
    )
}
export default About
