import React from 'react';

const Contact = () => {
    return (
        <>
            <section className="bg-purple-50">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-purple-800">
                        Contact Us
                    </h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-purple-600 sm:text-xl">
                        Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                    </p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-purple-700">
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm bg-purple-100 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                                placeholder="name@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-purple-700">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="block p-3 w-full text-sm text-purple-900 bg-purple-100 rounded-lg border border-purple-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Let us know how we can help you"
                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-purple-700">
                                Your message
                            </label>
                            <textarea
                                id="message"
                                rows="6"
                                className="block p-2.5 w-full text-sm text-purple-900 bg-purple-100 rounded-lg shadow-sm border border-purple-300 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Leave a comment..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Contact;
