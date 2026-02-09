import pervaya from '../public/gey/0.png'

const KeyComponent = () => {
    const KeyElement = [
        {label: 'Квартиры и офисы', price: 'от 100 000 ₽', image: pervaya},
        {label: 'Магазины и ТЦ', price: 'от 100 000 ₽', image: pervaya},
        {label: 'Фитнес центры', price: 'от 150 000 ₽', image: pervaya},
        {label: 'Бассейны', price: 'от 150 000 ₽', image: pervaya},
        {label: 'Загородные дома, коттеджи, таунхаусы', price: 'от 200 000 ₽', image: pervaya},
        {label: 'Рестораны, кафе, бары', price: 'от 200 000 ₽', image: pervaya},
        {label: 'Стоматологии, клиники', price: 'от 200 000 ₽', image: pervaya},
        {label: 'Салоны красоты, СПА', price: 'от 100 000 ₽', image: pervaya}
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