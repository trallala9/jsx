/*var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function () {
        return (
            React.createElement('form', {
                    className: 'contactForm'
                },
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Imię',
                    value: this.props.contact.firstName,
                }),
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Nazwisko',
                    value: this.props.contact.lastName,
                }),
                React.createElement('input', {
                    type: 'email',
                    placeholder: 'Email',
                    value: this.props.contact.email,
                }),
                React.createElement('button', {
                    type: 'submit'
                }, "Dodaj kontakt")
            )
        )
    },
})*/
function ContactForm(contact) {
    return ( <
        form className = 'contactForm' >
        <
        input type = 'text'
        placeholder = 'Imię'
        value = {
            contact.firstName
        }
        /> <
        input type = 'text'
        placeholder = 'Nazwisko'
        value = {
            contact.lastName
        }
        /> <
        input type = 'email'
        placeholder = 'Email'
        value = {
            contact.email
        }
        /> <
        button type = 'submit' > Dodaj kontakt < /button> < /
        form >
    );
};

ContactForm.prototype = {
    contact: React.PropTypes.object.isRequired
}
