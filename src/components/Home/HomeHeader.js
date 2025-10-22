import HeaderBg from '../../assets/home/header-bg.png';
import { WhitePhoneIcon } from '../../utils/svg';

const HomeHeader = () => {
    return (
        <div className="mx-0 position-relative home-header" style={{ backgroundImage: `url(${HeaderBg})` }}>

            <div className="position-absolute d-flex flex-column header-cover">
                <p className="text-white fw-bold fw-md-semibold text-center mx-auto title">
                    So verkaufst du deine Immobilie heute
                </p>

                <p className="text-white fw-normal lh-lg text-center mx-auto description">
                    Wir begleiten deinen Immobilienverkauf mit digitalen und persönlichen Services bis zum Notariat. Zum Fixpreis
                </p>

                <div 
                    className="d-flex gap-4 rounded-1 py-8 mx-auto bg-secondary justify-content-center align-items-center cursor-pointer button"
                    onClick={() => { window.renderKontaktformular(true) }}
                >
                    <WhitePhoneIcon />
                    <p className="text-white fw-normal lh-base" style={{ fontSize: 16 }}>Kontaktiere uns</p>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader;