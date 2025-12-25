// ContactInfo: Reusable component for displaying individual contact details
import PropTypes from "prop-types";

const ContactInfo = ({name, email, phone}) => (
    <div className="mt-[4.63vh] first:mt-[9.26vh]">
        <p className="text-[clamp(10px,0.83vw,16px)]">{name}</p>
        <p className="text-[clamp(10px,0.83vw,16px)]">
            <a href={`mailto:${email}`} className="hover:text-gray-500">{email}</a>
        </p>
        <p className="text-[clamp(10px,0.83vw,16px)]">
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