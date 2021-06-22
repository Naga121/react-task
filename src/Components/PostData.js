import React from 'react';
import { connect } from 'react-redux';
const PostDisplay = ({ people }) => {
    // console.log(people.value);
    let tdata = people.map(x => (
        <div className="dData">
            <p> Title: {x.title}</p>
            <p>Content: {x.Content}</p>
        </div>
    ))

    return (
        <div>

            {tdata}
        </div>
    )
}
const data = (store) => {
    return { people: store.peoplevalues.people }
}
export const PostHoc = connect(data)(PostDisplay)
