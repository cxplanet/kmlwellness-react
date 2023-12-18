import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="email" name="email" />
                    </label>
                </div>
                <div>
                    <label>
                        Message:
                        <textarea name="message" />
                    </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Contact;