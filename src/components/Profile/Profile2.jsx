export default function Profile2({data}) {
    return(
        <ul className="profile-info">
            <h3 className="info-title">Dues :</h3>
            <li className="profile-info-item">
                <strong className="profile-info-item-name">Requirements</strong>
                <strong>:</strong>
                <span>${data && data.due}</span>
            </li>
            <li className="profile-info-item">
                <strong className="profile-info-item-name">Balance</strong>
                <strong>:</strong>
                <span>${data.paid.due.balance}</span>
            </li>
            <li className="profile-info-item">
                <strong className="profile-info-item-name">Pending</strong>
                <strong>:</strong>
                <span>${data.paid.due.pending}</span>
            </li>
            <li className="profile-info-item">
                <strong className="profile-info-item-name">Paid Amount</strong>
                <strong>:</strong>
                <span>${data && data.paid.due.completed}</span>
            </li>
            {/* <li className="profile-info-item">
                <strong className="profile-info-item-name">Canceled </strong>
                <strong>:</strong>
                <span>{data && data.paid.due.canceled}</span>
            </li> */}
        </ul>
    )
}