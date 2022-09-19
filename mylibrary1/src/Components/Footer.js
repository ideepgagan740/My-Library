import React from 'react'

export default function Footer(props) {
    var style = { backgrond: "rgba(0, 0, 0, 0.2)" };
    return (
        <>
            <footer className="bg-black text-center text-white">
                <div className="container p-4 pb-0">
                    <section className="mb-4">
                        <a className="btn  btn-floating m-1" href="https://www.facebook.com/Gagan5205singh" role="button"
                        ><img id="footerimg" src='/Assets/Fb1.png' alt={props.fbalt}></img>
                        <i className="fab fa-facebook-f"></i
                        ></a>

                        <a className="btn btn-floating m-1" href="https://www.instagram.com/i_deepgagan_740/" role="button"
                        ><img id="footerimg" src="/Assets/Linked1.png" alt={props.lnkalt}/>
                        <i className="fab fa-instagram"></i
                        ></a>

                        <a className="btn btn-floating m-1" href="https://www.linkedin.com/in/gagandeep-singh-597b2b1a6/" role="button"
                        ><img id="footerimg" src="/Assets/Insta1.png" alt={props.instaalt}></img>
                        <i className="fab fa-linkedin-in"></i
                        ></a>

                        <a className="btn btn-floating m-1" href="https://github.com/ideepgagan740s" role="button"
                        ><img id="footerimg" src="/Assets/Git2.png" alt={props.gitalt}></img>
                        <i className="fab fa-github"></i
                        ></a>
                    </section>
                </div>
                <div className="text-center p-3 WhiteText" style={style}>© 2020 Copyright:<a className="text-white" href="/">Web Developers</a>
                </div>
            </footer>
        </>
    )
}