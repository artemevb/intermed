

const support = [
    {
        id: 1,
        title: "",
        description: "Lorem ipsum dolor sit amet consectetur. Dictum vel convallis sed blandit metus gravida. Faucibus interdum nunc lectus ornare turpis tempus. Scelerisque dui id fermentum cras. Elit vitae risus sodales eget. Justo blandit nec quis ut dictumst. Sit non interdum sodales malesuada ipsum dolor aliquam. Ac nunc cursus lorem enim. Arcu cursus nisi urna fringilla. Nunc dolor convallis et adipiscing. Risus bibendum lectus massa tortor sed a. Eget commodo neque sodales blandit aliquet eu. Ultricies scelerisque lorem aliquet mollis. Egestas viverra non non purus cras. Viverra adipiscing consequat sed fermentum elementum. Massa pulvinar aenean nunc eu fermentum pretium. Molestie mattis volutpat tincidunt consequat tempus. Aliquet aliquam quam sit consectetur pharetra. Ipsum id in nulla vulputate amet proin. Ac et non aenean in mauris tristique."
    },
    {
        id: 2,
        title: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur. Dictum vel convallis sed blandit metus gravida. Faucibus interdum nunc lectus ornare turpis tempus. Scelerisque dui id fermentum cras. Elit vitae risus sodales eget. Justo blandit nec quis ut dictumst. Sit non interdum sodales malesuada ipsum dolor aliquam. Ac nunc cursus lorem enim. Arcu cursus nisi urna fringilla. Nunc dolor convallis et adipiscing. Risus bibendum lectus massa tortor sed a. Eget commodo neque sodales blandit aliquet eu. Ultricies scelerisque lorem aliquet mollis. Egestas viverra non non purus cras. Viverra adipiscing consequat sed fermentum elementum. Massa pulvinar aenean nunc eu fermentum pretium. Molestie mattis volutpat tincidunt consequat tempus. Aliquet aliquam quam sit consectetur pharetra. Ipsum id in nulla vulputate amet proin. Ac et non aenean in mauris tristique.",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur. Dictum vel convallis sed blandit metus gravida. Faucibus interdum nunc lectus ornare turpis tempus. Scelerisque dui id fermentum cras. Elit vitae risus sodales eget. Justo blandit nec quis ut dictumst. Sit non interdum sodales malesuada ipsum dolor aliquam. Ac nunc cursus lorem enim. Arcu cursus nisi urna fringilla. Nunc dolor convallis et adipiscing. Risus bibendum lectus massa tortor sed a. Eget commodo neque sodales blandit aliquet eu. Ultricies scelerisque lorem aliquet mollis. Egestas viverra non non purus cras. Viverra adipiscing consequat sed fermentum elementum. Massa pulvinar aenean nunc eu fermentum pretium. Molestie mattis volutpat tincidunt consequat tempus. Aliquet aliquam quam sit consectetur pharetra. Ipsum id in nulla vulputate amet proin. Ac et non aenean in mauris tristique.",
    },
    {
        id: 4,
        title: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur. Dictum vel convallis sed blandit metus gravida. Faucibus interdum nunc lectus ornare turpis tempus. Scelerisque dui id fermentum cras. Elit vitae risus sodales eget. Justo blandit nec quis ut dictumst. Sit non interdum sodales malesuada ipsum dolor aliquam. Ac nunc cursus lorem enim. Arcu cursus nisi urna fringilla. Nunc dolor convallis et adipiscing. Risus bibendum lectus massa tortor sed a. Eget commodo neque sodales blandit aliquet eu. Ultricies scelerisque lorem aliquet mollis. Egestas viverra non non purus cras. Viverra adipiscing consequat sed fermentum elementum. Massa pulvinar aenean nunc eu fermentum pretium. Molestie mattis volutpat tincidunt consequat tempus. Aliquet aliquam quam sit consectetur pharetra. Ipsum id in nulla vulputate amet proin. Ac et non aenean in mauris tristique.",
    },

];

export default function TechnicalSupport() {

    return (
        <div className="w-full max-w-[1440px] mx-auto px-[10px] flex flex-col gap-2  mb-[100px] mt-[30px] mdx:mt-[40px] mdx:mb-[140px] xl:mt-[60px] xl:mb-[170px]">
            <h2 className='uppercase text-[25px] mdx:text-[30px] mdl:text-[35px] xl:text-[40px] font-semibold'>Сервисное обслуживание</h2>
            {support.map(support => (
                <div key={support.id} className="flex items-center gap-4 pb-[30px] ">
                    <div>
                        <h2 className="text-[20px] mdx:text-[24px] font-semibold pb-[7px]">{support.title}</h2>
                        <p className="text-[15px] mdx:text-[20px]">{support.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
