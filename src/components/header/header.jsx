export const Header = () => {

    const sizeChangeHandler = () => {
        if (document.getElementsByTagName('meta')['viewport'].content == 'width = 1440px') {
            document.getElementsByTagName('meta')['viewport'].content = 'width = 400px';
        } else {
            document.getElementsByTagName('meta')['viewport'].content = 'width = 1440px';
        }
    }

    return (
        <div>
            <div className="">
                <p className="">Assessment</p>
                <svg width="2" height="46" viewBox="0 0 2 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0V46" stroke="#DADCE0" />
                </svg>
                <p className="" onClick={() => sizeChangeHandler()}>My Assessments</p>
            </div>
        </div>
    )
}
