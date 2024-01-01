export const cameras = [
    {
        id: 1,
        title: "Nikon FM3a",
        images: ["/11.jpg", "/21.jpg", "/29.jpg", "/32.jpg", "/18.jpg"],
    },
    {
        id: 2,
        title: "Nikon F70",
        images: ["/12.jpg", "/15.jpg", "/hero_1.jpg", "/9.jpg", "/20.jpg"],
    },
    {
        id: 3,
        title: "Minolta Riva Zoom 90EX",
        images: ["/13.jpg", "/14.jpg", "/30.jpg", "/10.jpg", "/31.jpg"],
    },
    {
        id: 4,
        title: "Pentax MZ-7",
        images: ["/35.jpg", "/3.jpg", "/6.jpg", "/25.jpg", "/24.jpg"],
    },
    {
        id: 5,
        title: "Pentax 6×7",
        images: ["/36.jpg", "/23.jpg", "/27.jpg", "/5.jpg", "/8.jpg"],
    },
    {
        id: 6,
        title: "Voigtlander Bessa R4A",
        images: ["/37.jpg", "/16.jpg", "/hero_2.jpg", "/33.jpg", "/34.jpg"],
    },
    {
        id: 7,
        title: "Mamiya 7 II",
        images: ["/35.jpg", "/22.jpg", "/26.jpg", "/1.jpg", "/19.jpg"],
    },
    {
        id: 8,
        title: "Nikon F100",
        images: ["/38.jpg", "/4.jpg", "/28.jpg", "/7.jpg", "/17.jpg"],
    },
];

export const HomeGridItems = [
    {
        img_url: "hero_1.jpg",
        className: "col-span-2 max-md:col-span-4 min-h-[300px]",
    },
    {
        img_url: "hero_2.jpg",
        img_url2: "/37.jpg",
        camera: {id: 6, title: "Voigtlander Bessa R4A"},
        className: "col-span-2 max-md:col-span-4 min-h-[300px] relative",
    },
    {
        img_url: "1.jpg",
        img_url2: "/35.jpg",
        camera: {id: 7, title: "Mamiya 7 II"},
        className: "col-span-1 max-md:col-span-2 min-h-[350px]",
    },
    {
        img_url: "2.jpg",
        className: "col-span-1 max-md:col-span-2 min-h-[350px]",
    },
    {
        className: "max-md:col-span-2 flex flex-col space-y-5",
        text: [
            {
                paragraph:
                    "В каждом кадре плёночной фотографии укромится капля нежности, словно мгновение, которое решает остаться в сердце вечно.",
                className: "text-[15px] max-md:text-[12px] mb-5",
            },  
            {
                paragraph:
                    "Сделайте кадр, чтобы ваши эмоции взорвались красками, а воспоминания тепло обволакивали вашу душу.",
                className: "text-[15px] max-md:text-[12px] mb-5",
            },
            {
                paragraph: "Плёнки – ключ к весёлым воспоминаниям",
                className: "text-[15px] max-md:text-[12px]",
            },
        ],
    },
    {
        img_url: "3.jpg",
        className: "col-span-1 max-md:col-span-2",
    },
    {
        className: "col-span-2",
    },
    {
        img_url: "4.jpg",
        className:
            "col-span-1 max-md:col-span-2 max-md:col-start-3 max-md:col-end-1 min-h-[350px]",
    },
    {
        className: "md:hidden max-md:col-span-2",
    },
    {
        className: "md:hidden max-md:col-span-2",
    },
    {
        img_url: "5.jpg",
        className: "col-span-1 max-md:col-span-2 min-h-[350px]",
    },
    {
        className: "md:hidden",
    },
    {
        img_url: "6.jpg",
        className: "col-span-2 max-md:col-span-4 h-[800px]",
    },
    {
        className:
            "col-span-2 max-md:col-span-4 flex flex-col items-center justify-end space-y-5",
        text: [
            {
                paragraph:
                    "В мире цифровых технологий, где каждый момент запечатлен на смартфонах, плёночные фотоаппараты вносят долю волшебства и тепла в нашу фотографическую память. Создавая неповторимую атмосферу, они позволяют почувствовать магию момента, вдохновляясь прошлыми временами.",
                className: "text-[15px] max-md:text-[12px] mb-5",
            },
            {
                paragraph:
                    "Плёночные фотографии не просто фиксируют события – они создают настроение, добавляют текстуру и глубину. Этот возврат к классическим методам фотографии приносит с собой ощущение аутентичности и индивидуальности. В эпоху, где все мгновения становятся быстро забытыми, плёночная фотография возвращается как способ сохранить важные моменты в жизни в настоящем и сохранить их на долгие годы.",
                className: "text-[15px] max-md:text-[12px] mb-5",
            },
            {
                paragraph:
                    "Возвращение интереса к плёночным фотоаппаратам — это не просто модный тренд, но и стремление снова оценить каждый кадр, вложить в него частичку души и оставить след в истории своей жизни.",
                className: "text-[15px] max-md:text-[12px]",
            },
        ],
    },
    {
        img_url: "8.jpg",
        img_url2: "/36.jpg",
        camera: {id: 5, title: "Pentax 6×7"},
        className: "col-span-1 max-md:col-span-2",
    },
    {
        className: "max-md:col-span-2",
    },
    {
        img_url: "9.jpg",
        className: "col-span-1 max-md:col-span-2",
    },
    {
        img_url: "10.jpg",
        className: "col-span-1 max-md:col-span-2",
    },
    {
        className: "max-md:col-span-2",
    },
    {
        img_url: "14.jpg",
        className: "col-span-1 max-md:col-span-2",
    },
    {
        img_url: "15.jpg",
        img_url2: "/12.jpg",
        camera: {id: 2, title: "Nikon F70"},
        className: "col-span-1 max-md:col-span-2",
    },
    {
        img_url: "16.jpg",
        className: "col-span-1 max-md:col-span-2",
    },
];
