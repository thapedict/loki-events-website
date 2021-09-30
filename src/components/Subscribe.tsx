import React, { FormEvent, useState } from 'react';

function Subscribe() {
    const [email, setEmail] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [response, setResponse] = useState('');

    const formSubmit = (e: FormEvent) => {
        e.preventDefault();
        setEmail('');
        setDisabled(true);

        subscribeTo().then(data => {
            setResponse('You are now subscribed');

            setEmail('');
            setDisabled(false);
        }).catch(e => {
            setResponse(e.toString());
            console.log('Err-in-FS:', e);
        })
    }

    const subscribeTo = async () => {
        const url = `http://localhost:3009/subscribers`;
        const body = {
            email: email,
            date: new Date().toUTCString()
        }
        try {
            const res = await fetch(url, {
                method: "POST",
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' }
            });
            return await res.json();
        } catch (error) {
            console.log('Err-in-Sub:', error);
        }
    }

    return (
        <section id="subscribe" className="container-full">
            <div className="container full align-center">
                <h3>Subscribe to events in your area</h3>
                {response !== '' && <p>{response}</p>}
                <form onSubmit={(e) => formSubmit(e)} id="subscribe" method="post" className="ts-ns-3-1">
                    <input name="email" id="email" disabled={disabled} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="submit" disabled={disabled} value="Subscribe Now" />
                </form>
            </div>
        </section>)
}

export default Subscribe;