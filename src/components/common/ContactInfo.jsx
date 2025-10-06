// ContactInfo: Reusable component for displaying individual contact details
import PropTypes from "prop-types";

const ContactInfo = ({name, email, phone}) => (
    <div className="mt-[15px] first:mt-[50px]">
        <p className="text-10 lg:text-16">{name}</p>
        <p className="text-10 lg:text-16">
            <a href={`mailto:${email}`} className="hover:text-gray-500">{email}</a>
        </p>
        <p className="text-10 lg:text-16">
            <a href={`tel:${phone}`} className="hover:text-gray-500">{phone}</a>
        </p>
    </div>
);

ContactInfo.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

export default ContactInfo;