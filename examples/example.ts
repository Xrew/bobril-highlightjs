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
                b.styledDiv(
                    [
                        'Bobril module to using popular library ',
                        {
                            tag: 'a',
                            attrs: {href: 'https://highlightjs.org/'},
                            children: 'Highlight.js'
                        }, '.'
                    ],
                    {
                        paddingBottom: 12
                    }
                ),
                'The most of code fragments were taken on original ',
                {
                    tag: 'a',
                    attrs: {href: 'https://highlightjs.org/static/demo/'},
                    children: 'Highlight.js demo'
                }, ' website.',
                b.styledDiv('Currently only the \'default\' highlight style is supported. We are working on others.', {display: 'block'}),
            ],
            examples: [
                Container.create({
                    label: 'C#',
                    content: BobrilHighlightJs.create({
                        code: cspCode,
                        configuration: {
                            language: BobrilHighlightJs.Language.csp,
                        }
                    })
                }),
                Container.create({
                    label: 'Typescript',
                    content: BobrilHighlightJs.create({
                        code: typescriptCode,
                        configuration: {
                            language: BobrilHighlightJs.Language.typescript,
                        }
                    })
                }),
                Container.create({
                    label: 'Bash',
                    content: BobrilHighlightJs.create({
                        code: bashCode,
                        configuration: {
                            language: BobrilHighlightJs.Language.bash,
                        }
                    })
                }),
                Container.create({
                    label: 'Python',
                    content: BobrilHighlightJs.create({
                        code: pythonCode,
                        configuration: {
                            language: BobrilHighlightJs.Language.python,
                        }
                    })
                })
            ]
        })
    ]
});

const cspCode = `using System.IO.Compression;

#pragma warning disable 414, 3021

namespace MyApplication
{
    [Obsolete("...")]
    class Program : IInterface
    {
        public static List<int> JustDoIt(int count)
        {
            Console.WriteLine($"Hello {Name}!");
            return new List<int>(new int[] { 1, 2, 3 })
        }
    }
}`;

const pythonCode = `@requires_authorization
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''`;

const typescriptCode = `import * as b from 'bobril';

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

const bashCode = `
#!/bin/bash

###### CONFIG
ACCEPTED_HOSTS="/root/.hag_accepted.conf"
BE_VERBOSE=false

if [ "$UID" -ne 0 ]
then
 echo "Superuser rights required"
 exit 2
fi

genApacheConf(){
 echo -e "# Host \${HOME_DIR}$1/$2 :"
}`;