import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { SITE_URL } from '../define/Define'

const QuizCategory = () => {

    const [quizCategory, setQuizCategory] = useState([]);

    useEffect(() => {
        const fetchQuizCategory = async () => {
            try {
                const response = await axios.get(`${SITE_URL}new/app/api/get_category.php`);
                const data = response.data;
                setQuizCategory(data);
            } catch (error) {

            }
        }

        fetchQuizCategory();
    }, [])
    // <Link to='/quiz' className='btn btn-success'>Start Quiz Now</Link>

    return (
        <div className="bg-white" style={{ height: 'calc(100vh - 116px)' }}>
            <div className="row mx-1">
                {quizCategory.length > 0 ? (
                    quizCategory.map((item) => {
                        return (
                            <div
                                className="col-6 d-flex flex-column px-1 mt-3"
                                key={item.id}>
                                <Link
                                    to={`/quiz_type/${item.ser_title}`}
                                    className="border border-2 shadow" style={{ height: '200px', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', overflow: 'hidden', textDecoration: 'none' }}>
                                    <img src={`${SITE_URL}new/app/upload/category_img/${item.image}`} alt="img" className="" style={{ width: '100%', height: '60%' }} />
                                    <div className="pt-2" style={{ height: '40%' }}>
                                        <div className='text-secondary text-center p-0' style={{ width: '100%', fontSize: '14px', fontWeight: '600' }}>
                                            <div dangerouslySetInnerHTML={{ __html: item.ser_title.length > 50 ? item.ser_title.substring(0, 50) + "..." : item.ser_title }} />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                ) : (
                    <div style={{ width: '100%', height: 'calc(100vh - 112px)', display: 'grid', placeItems: 'center' }}>
                        <div className="spinner-border text-success" role="status">
                        </div>
                    </div>
                )
                }
            </div>

        </div>



    );
}

export default QuizCategory
