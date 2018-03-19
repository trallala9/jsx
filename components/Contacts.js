/*var Contacts = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired,
    },

    render: function () {
        var contacts = this.props.items.map(function (contact) {
            return React.createElement(Contact, {
                item: contact,
                key: contact.id
            });
        });

        return (
            React.createElement('ul', {
                className: 'contactsList'
            }, contacts)
        );
    }
});*/
function Contacts(props) {
    let contacts = props.items.map(function (contact) {
        return <Contact contact = {
            contact
        }
        key = {
            contact.id
        }
        />;
    });

    return ( < ul className = 'contactsList' > {
            contacts
        } < /ul>);
    }

    Contacts.prototype = {
        items: React.PropTypes.array.isRequired
    }
