import * as b from 'bobril';
import 'bobril-flex-ie10';
import * as m from 'bobril-m';
import * as Container from './components/container';
import * as Layout from './components/layout';
import * as BobrilHighlightJs from '../index';

m.initRobotoFonts();


// *********************************************************************************
// *********************** Example of bobril-highlightjs usage *********************
// *********************************************************************************
b.init(() => {
    return [
        Layout.create({
            header: 'bobril-highlightjs',
            description: [
            ],
            examples: [
                Container.create({
                    label: 'C#',
                    content: BobrilHighlightJs.create({
                        code: cspCode,
                        configuration: {
                            language: BobrilHighlightJs.Language.Csp,
                        }
                    })
                }),
                Container.create({
                    label: 'Typescript',
                    content: BobrilHighlightJs.create({
                        code: typescriptCode,
                        configuration: {
                            language: BobrilHighlightJs.Language.Typescript,
                        }
                    })
                })
            ]
        })
    ]
});

let cspCode = 'class Program\n{\n\tpublic static void JustDoIt()\n\t{\n\n\t}\n}';
let typescriptCode = `import * as b from 'bobril';

interface IContext extends b.IBobrilCtx {
    counter: number;
}

export const create = b.createComponent<never>({
    init(ctx: IContext) {
        ctx.counter = 0;
        setInterval(() => {
            ctx.counter++;
            b.invalidate(ctx);
        }, 1000);
    },

    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = ctx.counter;

        b.style(me, {fontSize: 25});
    }
});`;