import React from 'react';

import FormRender from '../../renderProps/formRender';
import LoaderRender from '../../renderProps/loaderRender';

var fields = [{ type: 'text', name: 'username' }, { type: 'password', name: 'password' }];


var axios = {
    get(url) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve('Hello ' + url);
            }, 2000)
        });
    }
};


function SignIn() {

    function handleSubmit(e, state, startFn, stopFn) {
        e.preventDefault();
        startFn();
        axios.get('http://localhost:5000').then(function (data) {
            stopFn();
            console.log(data);
        });
    }

    return (
        <LoaderRender render={function (startFn, stopFn) {
            return (
                <FormRender fields={fields} render={function (state, change) {
                    return (
                        <div>
                            <h2>SignIn</h2>
                            <form onSubmit={(e) => { handleSubmit(e, state, startFn, stopFn) }}>
                                {fields.map(function (field) {
                                    return (
                                        <div key={field.name}>
                                            <input onChange={change} type={field.type} name={field.name} />
                                        </div>
                                    );
                                })}
                                <button type="submit">LogIn</button>
                            </form>
                        </div>
                    );
                }} />
            );
        }} />
    );
}


export default SignIn;