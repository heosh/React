import React, { Fragment, useState, useMemo } from 'react';

const formatter = Intl.NumberFormat( 'ko-KR' );
function Order() {
    const [ selected, setSelected ] = useState( [] );


    const sum = useMemo(() => {
            let value = 0;
            selected.forEach(item => value += item.price)
            return value;
        }, [ selected ])



    const data = [
        {name:'에스프레소', price:2800},
        {name:'아메리카노', price:3000},
        {name:'카페라떼', price:3500},
        {name:'카페모카', price:3800}
    ]

    const onClick = element => {
        //console.log(selected.some(item => item.name === element.name))
        if( selected.some(item => item.name === element.name)) {
            setSelected(selected.filter(
                (item) => item.name !== element.name
            ))
        }
        else
        {                                      
            setSelected([...selected, element])
        }
    }    

    return (
        <div className="Container">
            <h1 className="font-bold">Order</h1>
            <dl>
                {
                data.map(element => {
                    return (
                        <Fragment key={element.name}>
                            <dt>{ element.name }</dt>
                            <dd>
                                { formatter.format(element.price) }원
                                <small>
                                    <button onClick={ () => onClick(element) }>
                                        [{ selected.some(item => item.name === element.name) ? '선택 해제':'선택' }]
                                    </button>
                                </small>
                            </dd>
                        </Fragment>
                    )
                })
            }
            </dl>
            <hr />
            <h3 className="text-xl font-bold">주문서</h3>
                <ul className="list-unstyled">
                    { selected.map( item => <li key={ item.name }>{ item.name }</li> ) }
                </ul>
                합계: { formatter.format(sum) }원
            <div>
                <button className="btn btn-primary">주문하기</button>
            </div>
        </div>
    )
}

export default Order;