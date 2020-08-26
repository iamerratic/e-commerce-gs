import React from 'react';
import axios from 'axios';

import FormRender from '../../renderProps/formRender';

var fields = [{ type: 'text', name: 'name' }, { type: 'text', name: 'username' }, { type: 'password', name: 'password' }];

function SignUp() {

    function handleSubmit(e, state) {
        e.preventDefault();
        axios.post('http://localhost:5000/users', state, {
            header: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            console.log(response);
        })
    }

    return (
        <FormRender fields={fields} render={function (state, change) {
            return (
                <div>
                    <h2>SignUp</h2>
                    <form onSubmit={(e) => { handleSubmit(e, state) }}>
                        {fields.map(function (field) {
                            return (
                                <div key={field.name}>
                                    <input onChange={change} type={field.type} name={field.name} />
                                </div>
                            );
                        })}
                        <button type="submit">SignUp</button>
                    </form>
                </div>
            );
        }} />
    );
}


export default SignUp;