import { useState } from "react";

const ArticleForm = () => {
    const [state, setState] = useState(null);
    const submit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        fetch(`http://localhost:9999/api/posts`, {
            method: "POST",
            body: form
        })
            .then(respone => {
                if (respone.status === 200) setState('OK');
                else setState('NOK');
            });
        }
        const checkState = () => {
            if (state === 'OK')
                return <div className="gG">Alles Gut</div>;
            else {
                return <div className="gR">Alles schlecht</div>;
            }
        };
   
    return (
        <>
            {checkState()}
            <form onSubmit={submit}>
                <input name="title" type="text" placeholder="Title" />
                <input name="text" type="text" placeholder="jdfgke" />

                <input name="postpic" type="file" placeholder="Title" />
                <input type="submit" value="Submit" />
            </form></>
    );

};

export default ArticleForm;