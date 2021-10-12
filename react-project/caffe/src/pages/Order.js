import React, { useState } from 'react';

const formatter = Intl.NumberFormat( 'ko-KR' );
function Order() {
    const [hasEspresso, setEspresso] = useState(false);
    const [hasAmericano, setAmericano] = useState(false);
    const [hasLatte, setLatte] = useState(false);

    let sum = 0;
    sum += hasEspresso ? 2800 : 0;
    sum += hasAmericano ? 3500 : 0;
    sum += hasLatte ? 4500 : 0;

    return (
        <div className="Container">
            <h1 className="font-bold">Order</h1>
            <dl>
                <dt>에스프레소</dt>
                <dd>2,800원
                    <small>
                        <button className='btn-xs btn-outline-primary' onClick={ () => {setEspresso(!hasEspresso)} }>
                            [{ hasEspresso ? '선택 해제' : '선택' }]
                        </button>
                    </small>
                </dd>
                <dt>아메리카노</dt>
                <dd>
                    3,500원
                    <small>
                        <button className='btn-xs btn-outline-primary' onClick={ () => {setAmericano(!hasAmericano)} }>
                            [{ hasAmericano ? '선택 해제' : '선택' }]
                        </button>
                    </small>
                </dd>
                <dt>카페라떼</dt>
                <dd>
                    4,500원
                    <small>
                        <button className='btn-xs btn-outline-primary' onClick={ () => {setLatte(!hasLatte)} }>
                            [{ hasLatte ? '선택 해제' : '선택' }]
                        </button>
                    </small>
                </dd>
            </dl>
            <hr />
            <h3 className="text-xl font-bold">주문서</h3>
                <ul className="list-unstyled">
                    { hasEspresso && <li>에스프레소</li>}
                    { hasAmericano && <li>아메리카노</li>}
                    { hasLatte && <li>카페라떼</li>}
                </ul>
                합계: { formatter.format(sum) }원
            <div>
                <button className="btn btn-primary">주문하기</button>
            </div>
        </div>
    )
}

export default Order;