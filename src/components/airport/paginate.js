import React, {useEffect, useState} from 'react';

const Paginate = ({currentsPage,setCurrentsPage,result, postsPerPage}) => {
    const pageNumbers1 = [];
    for (let i = 1; i <= Math.ceil(result.length/postsPerPage); i++ ){
        pageNumbers1.push(i)
    }
    const [currentButton, setCurrentButton] = useState(1);

    // Array of buttons what we see on the page
    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

    useEffect(() => {
        let tempNumberOfPages = [...arrOfCurrButtons];

        let dotsInitial = '...';
        let dotsLeft = '... ';
        let dotsRight = ' ...';

        if (pageNumbers1.length < 6) {
            tempNumberOfPages = pageNumbers1
        }

        else if (currentButton >= 1 && currentButton <= 3) {
            tempNumberOfPages = [1, 2, 3, 4, dotsInitial, pageNumbers1.length]
        }

        else if (currentButton === 4) {
            const sliced = pageNumbers1.slice(0, 5);
            tempNumberOfPages = [...sliced, dotsInitial, pageNumbers1.length]
        }

        else if (currentButton > 4 && currentButton < pageNumbers1.length - 2) {               // from 5 to 8 -> (10 - 2)
            const sliced1 = pageNumbers1.slice(currentButton - 2, currentButton)  ;               // sliced1 (5-2, 5) -> [4,5]
            const sliced2 = pageNumbers1.slice(currentButton, currentButton + 1) ;                // sliced1 (5, 5+1) -> [6]
            tempNumberOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, pageNumbers1.length]) // [1, '...', 4, 5, 6, '...', 10]
        }

        else if (currentButton > pageNumbers1.length - 3) {                 // > 7
            const sliced = pageNumbers1.slice(pageNumbers1.length - 4)       // slice(10-4)
            tempNumberOfPages = ([1, dotsLeft, ...sliced])
        }

        else if (currentButton === dotsInitial) {
            // [1, 2, 3, 4, "...", 10].length = 6 - 3  = 3
            // arrOfCurrButtons[3] = 4 + 1 = 5
            // or
            // [1, 2, 3, 4, 5, "...", 10].length = 7 - 3 = 4
            // [1, 2, 3, 4, 5, "...", 10][4] = 5 + 1 = 6
            setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length-3] + 1)
        }
        else if (currentButton === dotsRight) {
            setCurrentButton(arrOfCurrButtons[3] + 2)
        }

        else if (currentButton === dotsLeft) {
            setCurrentButton(arrOfCurrButtons[3] - 2)
        }

        setArrOfCurrButtons(tempNumberOfPages);
        setCurrentsPage(currentButton)
    }, [currentButton]);


    return (
        <div className="pagination-container">
            <a
                href="#"
                className={`${currentButton === 1 ? 'disabled' : ''} pagination1`}
                onClick={() => setCurrentButton(prev => prev <= 1 ? prev : prev - 1)}
            >
                Prev
            </a>

            {arrOfCurrButtons.map(((item, index) => {
                return <a
                    href="#"
                    key={index}
                    className={`${currentButton === item ? 'active' : '' } pagination1`}
                    onClick={() => setCurrentButton(item)}
                >
                    {item}
                </a>
            }))}

            <a
                href="#"
                className={`${currentButton === pageNumbers1.length ? 'disabled' : ''} pagination1`}
                onClick={() => setCurrentButton(prev => prev >= pageNumbers1.length ? prev : prev + 1)}
            >
                Next
            </a>
        </div>
    );
};

export default Paginate;