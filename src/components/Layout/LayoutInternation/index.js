import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function LayoutInternation({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Content />
            </div>
            <Footer />
            {children}
        </div>
    );
}

export default LayoutInternation;
