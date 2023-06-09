import { Fragment } from "react";
import Header from "../../components/Header";

interface Props {
    pk: number,
    tf: number,
    gm: number,
    eo: number,
    ri: number,
    ir: number,
    dk: number,
    rd: number,
    onStart: any 
}

function Results({pk, tf, gm, eo, ri, ir, dk, rd, onStart}: Props) {
    const handleStart = () => {
        onStart();
    }

    const sorted = Object.entries({ pk, tf, gm, eo, ri, ir, dk, rd }).sort(([,a],[,b]) => b - a);
    return (
        <>
            <Header 
                title='Классификация ролей в группе по Белбину'
                text='Согласно теории Белбина, идеальный менеджер — тот, кто совмещает в себе все достоинства вышеперечисленных типов ролей и при этом лишен их недостатков, в силу противоречивости личностных характеристик не существует.
                Но то, что недоступно одному человеку, может с успехом выполнить команда, личностные характеристики которых охватывают качества, необходимые для реализации всех 8 ролей. Это не означает, что группа должна состоять непременно из восьми человек. Каждый человек может совмещать в себе несколько ролей, но, как правило, не очень много, обычно не более 2-3 ролей. Главное, чтобы все функции выполнялись. Полная ролевая структура создает основу для эффективной работы команды в целом.
                В случае если группа работает неэффективно, полезно проанализировать ее состав на предмет 8 ролей по Белину. Возможно, что в команде не хватает сотрудника, играющего важную роль.'
            />
            <div>
                {sorted.map((item) => {
                    switch (item[0]) {
                        case 'pk':
                            return(  
                                <Fragment key={item[1]}>               
                                    <h2 className='mt-6 mb-4 text-center'>
                                        Председатель (Координатор, Coordinator) <span className='font-bold text-gray-900'>(ваш результат: {item[1]})</span>
                                    </h2>
                                    <p className="text-sm text-gray-600"><b>Характеристики личности:</b> Зрелый. Уверенный в себе, доверяющий.</p>
                                    <p className="text-sm text-gray-600"><b>Вклад в работу команды:</b> Разъясняет цели и расставляет приоритеты. Мотивирует коллег, повышает в должности.</p>
                                    <p className="text-sm text-gray-600"><b>Допустимые слабости:</b> Не очень интеллигентен, личность не высоко творческая.</p>
                                    <p className="text-sm text-gray-600 mt-4">Поощряющий и поддерживающий тип. Склонен доверять людям и принимать их такими, какие они есть, без проявления ревности или подозрительности. Председатель — это сильное доминирование и преданность групповым целям. Стиль руководства командой Председателя — радушно принимать вносимые вклады в деятельность команды и оценивать их в соответствии с целями команды. Зрелый, уверенный, самодисциплинированный. Спокойный, несуетливый. Умеет четко формулировать цели, продвигает решения, делегирует полномочия. Организует работу команды и использование ресурсов в соответствии с групповыми целями. Имеет ясное представление о сильных и слабых сторонах команды и максимально использует потенциал каждого члена команды. Председатель может не обладать блестящим интеллектом, но он хорошо руководит людьми. Идеальный Председатель выглядит как хороший менеджер, то есть человек, знающий как использовать ресурсы, исключительно адаптивный при общении с людьми, но в то же время никогда не теряющий своего контроля над ситуацией и своей способности принимать самостоятельные решения, основанные на собственной оценке того, что необходимо на практике. Председатель — это хороший лидер для сбалансированной по своему составу команды, перед которой стоят сложные и многогранные проблемы, требующие эффективного распределения ролей внутри команды.</p>
                                </Fragment>
                            )
                        case 'tf':
                            return(  
                                <Fragment key={item[1]}>               
                                    <h2 className='mt-6 mb-4 text-center'>
                                        Формирователь (Приводящий в действие, Shaper) <span className='font-bold text-gray-900'>(ваш результат: {item[1]})</span>
                                    </h2>
                                    <p className="text-sm text-gray-600"><b>Характеристики личности:</b> Очень сильная личность. Общителен, динамичен.</p>
                                    <p className="text-sm text-gray-600"><b>Вклад в работу команды:</b> Способен работать в режиме высокого напряжения, преодолевать препятствия для достижения цели.</p>
                                    <p className="text-sm text-gray-600"><b>Допустимые слабости:</b> Легко поддается на провокацию.</p>
                                    <p className="text-sm text-gray-600 mt-4">Предпринимательский тип. Формирователи всегда выступают как побудители к действию, и если команда склонна к бездействию или самодовольству, то присутствие Формирователя выведет ее из этого состояния. Такой лидер — динамичный, бросает вызов, оказывает давление. Стиль руководства Формирователя — оспаривать, мотивировать, достигать. Это более индивидуалистичный, чем Председатель тип лидера, который подталкивает людей к действиям и, увлекая их за собой, столь же часто приводит команду к неудаче, как и к успеху. Его мужество и энергия позволяют преодолевать трудности. Формирователи по многим параметрам являются антиподами Коллективистов. Ненавидят проигрыши, склонны к провокациям, раздражению и нетерпению. Характеризуются высокой самооценкой, склонностью к фрустрации, общительностью и подозрительным отношением к людям. Это экстраверты, побуждаемые к действиям требованиями внешней среды. Как лидеры они хороши для уже сработанной команды, которая в своей работе столкнулась со сложным, внешним, либо внутренним препятствием. Как менеджеры Формирователи процветают в ситуациях, характеризующихся «политической сложностью», сдерживающей движение вперед.</p>
                                </Fragment>
                            )
                        case 'gm':
                            return(  
                                <Fragment key={item[1]}>               
                                    <h2 className='mt-6 mb-4 text-center'>
                                        Мыслитель (Plant) <span className='font-bold text-gray-900'>(ваш результат: {item[1]})</span>
                                    </h2>
                                    <p className="text-sm text-gray-600"><b>Характеристики личности:</b> Умный. С хорошим воображением. Неординарный.</p>
                                    <p className="text-sm text-gray-600"><b>Вклад в работу команды:</b> Предлагает оригинальные идеи. Решает сложные вопросы.</p>
                                    <p className="text-sm text-gray-600"><b>Допустимые слабости:</b> Слабо контактирует и плохо управляет обыкновенными членами команды.</p>
                                    <p className="text-sm text-gray-600 mt-4">Интровертивный тип генератора идей. Изобретателен, обладает богатым воображением — человек с идеями, умеющий решать нестандартные проблемы. Как правило, Мыслители действуют в одиночку, сидя в своем углу и обдумывая различные варианты. Обладают высоким интеллектуальным уровнем и очень высоким показателем креативности. Это яркие представители интеллектуалов-одиночек, и они часто воспринимаются членами команды как не слишком коммуникабельные. Им свойственна прямота и честность в общении. Стиль Мыслителя — привносить инновационные идеи в работу команды и ее цели. Он склонен «витать в облаках» и игнорировать детали или протокол. Чем более успешно Мыслители осуществляют свою роль в команде, тем меньше их поведение похоже на привычную модель поведения менеджера. В мире организаций Мыслители не слишком процветают, и их менеджерская карьера редко бывает блестящей. Как правило, они очень способны и умелы, что приводит к тому, что в большинстве случаев они становятся техническими специалистами, а не занимают высокие управленческие посты. Мыслители чаще встречаются в новых, только формирующихся компаниях, поскольку по складу своему они скорее предприниматели, чем менеджеры.</p>
                                </Fragment>
                            )
                        case 'eo':
                            return(  
                                <Fragment key={item[1]}>               
                                    <h2 className='mt-6 mb-4 text-center'>
                                        Оценщик (Monitor-Evaluator) <span className='font-bold text-gray-900'>(ваш результат: {item[1]})</span>
                                    </h2>
                                    <p className="text-sm text-gray-600"><b>Характеристики личности:</b> Трезво оценивает обстановку. Интеллигентен. Скуп на эмоции. Объективен.</p>
                                    <p className="text-sm text-gray-600"><b>Вклад в работу команды:</b> Рассматривает все варианты. Анализирует. Старается предвидеть результат.</p>
                                    <p className="text-sm text-gray-600"><b>Допустимые слабости:</b> Недостает способности вдохновить остальной коллектив.</p>
                                    <p className="text-sm text-gray-600 mt-4">Рассудителен, проницателен, обладает стратегическим мышлением. Видит все альтернативы, все взвешивает — инспектор. Оценщик объективен при анализе проблем и оценке идей. Редко охваченный энтузиазмом, он защищает команду от принятия импульсивных, отчаянных решений. Представители этой роли ярко не проявляют себя в команде до тех пор, пока не приходит время принятия важных решений. При этом члены команды, предлагающие идеи (Мыслитель и Разведчик) редко являются теми людьми, которые способны оценить выгоду от своих идей и их последствия. Представители этой роли отличаются высоким интеллектуальным уровнем, высокими показателями критичности мышления, особенно это касается их способности выдвигать контраргументы. Оценщики достаточно медлительны в своих рассуждениях и всегда предпочитают все тщательно обдумывать. Оценщикам может не хватать вдохновения или способности мотивировать других. Окружающими они могут восприниматься как сухие, несколько занудные и порой чересчур критичные люди. Многие даже удивляются, как представители этой категории вообще становятся менеджерами. Тем не менее Оценщики нередко занимают высокие стратегические посты в организациях.</p>
                                </Fragment>
                            )
                        case 'ri':
                            return(  
                                <Fragment key={item[1]}>               
                                    <h2 className='mt-6 mb-4 text-center'>
                                        Исполнитель (Implementer) <span className='font-bold text-gray-900'>(ваш результат: {item[1]})</span>
                                    </h2>
                                    <p className="text-sm text-gray-600"><b>Характеристики личности:</b> Консервативен. Дисциплинирован. Надежен.</p>
                                    <p className="text-sm text-gray-600"><b>Вклад в работу команды:</b> Организует. Претворяет в жизнь идеи и планы.</p>
                                    <p className="text-sm text-gray-600"><b>Допустимые слабости:</b> Негибок. Медленно реагирует на новые возможности.</p>
                                    <p className="text-sm text-gray-600 mt-4">Основным качеством Исполнителей является дисциплинированность; другие же природные способности или интеллект почти всегда в их случае вторичны. Стиль исполнителя в команде — организация работ. Исполнители надежны, консервативны и эффективны. Они обладают внутренней стабильностью и низким уровнем беспокойства. Работают преимущественно на команду, а не ради удовлетворения собственных интересов. Умеют реализовать идеи в практических действиях. Исполнители принимают поставленные перед ними цели, которые становятся частью их морального кодекса, и придерживаются их при выполнении работ. Они систематически составляют планы и выполняют их. Очень эффективные организаторы и администраторы. Они могут иметь недостаток гибкости и не любят непроверенные идеи. В крупных, хорошо структурированных организациях карьера таких людей обычно складывается очень успешно. Успех и признание приходят к Исполнителям со временем в результате того, что они систематически делают ту работу, которую необходимо делать, даже если она не отвечает их внутренним интересам или не приносит удовольствия. </p>
                                </Fragment>
                            )
                        case 'ir':
                            return(  
                                <Fragment key={item[1]}>               
                                    <h2 className='mt-6 mb-4 text-center'>
                                        Разведчик (Исследователь ресурсов, Resource Investigator) <span className='font-bold text-gray-900'>(ваш результат: {item[1]})</span>
                                    </h2>
                                    <p className="text-sm text-gray-600"><b>Характеристики личности:</b> Экстраверт. Энтузиаст. Любопытен. Общителен.</p>
                                    <p className="text-sm text-gray-600"><b>Вклад в работу команды:</b> Изучает новые возможности. Развивает контакты. Переговорщик.</p>
                                    <p className="text-sm text-gray-600"><b>Допустимые слабости:</b> Теряет интерес по мере угасания первоначального энтузиазма.</p>
                                    <p className="text-sm text-gray-600 mt-4">Экстравертивный тип генератора идей. Энтузиаст, общителен. Это еще один член команды, ориентированный на предложение новых идей. Однако, способ генерации идей Разведчиками и сам характер предлагаемых ими идей отличны от мыслителей. Они склонны не столько сами предлагать оригинальные идеи, сколько «подбирать» фрагменты идей окружающих и развивать их. Разведчики особо искусны в изучении ресурсов за пределами команды. Стиль построения команды разведчика — создать сеть и собирать полезные ресурсы для команды. При средних показателях интеллектуального уровня и креативности, они общительны, любознательны и социально ориентированы. Благодаря этим качествам и умению использовать ресурсы Разведчики легче, чем Мыслители интегрируются в команду. При умелом руководстве лидера команды Мыслитель и Разведчик могут успешно сосуществовать вместе, не покушаясь на территорию друг друга и внося каждый свой вклад в предложение новых идей.</p>
                                </Fragment>
                            )
                        case 'dk':
                            return(  
                                <Fragment key={item[1]}>               
                                    <h2 className='mt-6 mb-4 text-center'>
                                        Коллективист (Team Worker) <span className='font-bold text-gray-900'>(ваш результат: {item[1]})</span>
                                    </h2>
                                    <p className="text-sm text-gray-600"><b>Характеристики личности:</b> Ориентирован на общество. Мягок, уживчив, восприимчив.</p>
                                    <p className="text-sm text-gray-600"><b>Вклад в работу команды:</b> Слушает. Строит, улаживает разногласия. Работает с трудными людьми.</p>
                                    <p className="text-sm text-gray-600"><b>Допустимые слабости:</b> Теряется в острых ситуациях.</p>
                                    <p className="text-sm text-gray-600 mt-4">Мягкий, восприимчивый, дипломатичный. Умеет слушать, предотвращает трения членов команды — чувствителен по отношению и к индивидам, и к ситуациям. Коллективист играет ориентированную на отношения, поддерживающую роль в команде. Если в команде есть сложные в общении люди, то Коллективисты способны оказать мягкое воздействие на ситуацию и предотвратить потенциальные конфликты, тем самым оказывая помощь формальному лидеру команды в выполнении поставленной задачи. Коллективист может быть нерешителен в момент кризиса. Представители этого типа нередко встречаются среди высшего руководства организаций. Из них получаются отличные наставники молодых менеджеров.</p>
                                </Fragment>
                            )
                        case 'rd':
                            return(  
                                <Fragment key={item[1]}>               
                                    <h2 className='mt-6 mb-4 text-center'>
                                        Доводчик (Completer-Finisher) <span className='font-bold text-gray-900'>(ваш результат: {item[1]})</span>
                                    </h2>
                                    <p className="text-sm text-gray-600"><b>Характеристики личности:</b> Сознательный. Беспокойный.</p>
                                    <p className="text-sm text-gray-600"><b>Вклад в работу команды:</b> Ищет ошибки, недоработки. Концентрируется и ориентирует других на установленные сроки.</p>
                                    <p className="text-sm text-gray-600"><b>Допустимые слабости:</b> Имеет тенденцию напрасно беспокоиться. Не любит делегировать полномочия.</p>
                                    <p className="text-sm text-gray-600 mt-4">Старателен и добросовестен. Ищет ошибки и упущения. Контролирует сроки выполнения поручений. Как правило, об успехе команды судят по окончательным результатам ее работы. При этом многие люди почти патологически не могут довести начатое ими до конца, и умение завершать начатое является достаточно редким качеством. Доводчики — это люди обладающие этим даром в полной мере. Их отличает внимание к деталям и умение держать в голове запланированное, обеспечивая чтобы ничего не упускалось и все детали плана были доведены до завершения. Они предпочитают постоянные усилия, согласованность и последовательность действий «кавалерийским атакам». Они ориентированы на выполнение обязательств и меньше интересуются эффектным и громким успехом. Склонность к достижению совершенства во всем, за что они берутся, и непреклонность в достижении намеченного — их непременные качества. К их слабым сторонам следует отнести недостаточную гибкость, в результате чего они порой тратят слишком много сил на достижение поставленных целей, которые при изменившихся обстоятельствах оказываются недостижимыми.</p>
                                </Fragment>
                            )
                        default:
                            return null;
                    }
                })}
            </div>

    
            <div className='my-8 flex justify-center'>
                <button 
                    type="button"
                    className="inline-flex py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handleStart}>
                    Начать снова
                </button>
            </div>
        </>
    );
}

export default Results;
