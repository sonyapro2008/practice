import pervaya from '../public//0.png'

const KeyComponent = () => {
    const KeyElement = [
        {label: 'Квартиры и офисы', price: 'от 100 000 ₽', image: чето},
        {label: 'Магазины и ТЦ', price: 'от 100 000 ₽', image: чето},
        {label: 'Фитнес центры', price: 'от 150 000 ₽', image: чето},
        {label: 'Бассейны', price: 'от 150 000 ₽', image: чето},
        {label: 'Загородные дома, коттеджи, таунхаусы', price: 'от 200 000 ₽', image: чето},
        {label: 'Рестораны, кафе, бары', price: 'от 200 000 ₽', image: чето},
        {label: 'Стоматологии, клиники', price: 'от 200 000 ₽', image: чето},
        {label: 'Салоны красоты, СПА', price: 'от 100 000 ₽', image: чето}
    ]

    return (
        <div className='grid grid-cols-4 gap-9 '>
            {KeyElement.map((element, index) => (
                <div key={index}>
                    <p className='text-2xl'>{element.price}</p>
                    <img src={element.image} alt="!"></img>
                    <p>{element.label}</p>
                </div>
            ))}
        </div>
    )

}

export default KeyComponent