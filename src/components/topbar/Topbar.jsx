import './topbar.scss';
import { Person, Mail } from '@material-ui/icons';
import { FaDownload } from 'react-icons/fa';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <div className="logoImg">
                        <img src="acLogo2.png" alt=""/>
                    </div>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+91 9163474373</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>pankajkr885@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="itemContainer1">
                        <a href="#intro">HOME</a>
                    </div>
                    <div className="itemContainer1">
                        <a href="#about">ABOUT</a>
                    </div>
                    <div className="itemContainer1">
                        <a href="#Project">PROJECT</a>
                    </div>
                    <div className="itemContainer1">
                        <a href="#skill">SKILL</a>
                    </div>
                    <div className="itemContainer1">
                        <a href="#contact">CONTACT</a>
                    </div>
                    <div className="itemContainer1" id="lastDiv">
                        <a
                            href="https://drive.google.com/file/d/1Ed7TwNdQDZkHinzRt-qSN75kA0x3F047/view?usp=sharing"
                            target="blank"
                            id="last"
                        >
                            RESUME <FaDownload className="icon1" />
                        </a>
                    </div>

                    <div
                        className="hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
