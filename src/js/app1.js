import '../css/app1'
import $ from 'jquery'

const eventBus = $({})

const model = {
    data: {
        n: parseInt(localStorage.getItem('n'))
    },
    create() {},
    delete() {},
    update(data) {
        // model.data.n = data
        Object.assign(model.data, data)
        eventBus.trigger('m:update')
    },
    retrieve() {}
}

const view = {
    el: null,
    html: `
        <div>
            <div class="output">
                <span class="number">{{n}}</span>
            </div>
            <div class="actions">
                <button class="add1">+1</button>
                <button class="minus1">-1</button>
                <button class="mul2">*2</button>
                <button class="divide2">/2</button>
            </div>
        </div>
    `,
    init(el){
        view.el = $(el)
    },
    render(n){
        if(view.el.children.length !== 0) view.el.empty()
        $(view.html.replace('{{n}}', model.data.n))
            .appendTo($(view.el))
        localStorage.setItem('n', `${n}`)
    }
}

const controller = {
    init(el){
        view.init(el)
        view.render(model.data.n)
        controller.autoBindEvents()
        eventBus.on('m:update', ()=>{
            view.render(model.data.n)
        })
    },
    events: {
        'click .add1': 'add',
        'click .minus1': 'minus',
        'click .mul2': 'mul',
        'click .divide2': 'divide'
    },
    add(){
        model.update({n: model.data.n + 1})
    },
    minus(){
        model.update({n: model.data.n - 1})
    },
    mul(){
        model.update({n: model.data.n * 2})
    },
    divide(){
        model.update({n: model.data.n / 2})
    },
    autoBindEvents(){
        for(let key in controller.events){
            const value = controller[controller.events[key]]
            const spaceIndex = key.indexOf(' ')
            const part1 = key.slice(0, spaceIndex)
            const part2 = key.slice(spaceIndex+1)
            view.el.on(part1, part2, value)
        }
    }
}

export default controller

