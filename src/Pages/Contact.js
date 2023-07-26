const Contact = () => {
    return(
        <div className="Contact">
            <div className="container">
                
                <h3>Reach out to us.</h3>
                
                <form action='/Sent'>
                    <label for='Email'>Email:</label>
                    <input type="email" id="Email" placeholder="example@gmail.com" required autoFocus></input>
                    <label for='Message'>Message:</label>
                    <textarea name="message" id="Message" placeholder="Write a message..." required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
            
        </div>
    )
   
}

export default Contact