import * as b from 'bobril';

b.asset('../bower_components/highlightcss/index.css');
b.asset('../bower_components/highlight/index.js');

declare var hljs: any;

export enum LanguageEnum {
    Csp,
    Javascript,
    Typescript
}

export interface IHighlightConfiguration {
    language: LanguageEnum,
}

interface IData {
    code: string;
    configuration: IHighlightConfiguration,
    style?: b.IBobrilStyle,
    updateData?: (highlightCode: IHighlightConfiguration) => IHighlightConfiguration;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.tag = 'pre';
        me.children = {
            tag: 'code',
            className: LanguageEnum[ctx.data.configuration.language],
            children: ctx.data.code
        };

        // TODO sth to update configuration of highlighted block
        // if (ctx.data.updateData) {
        //     {ctx.data.highlightConfiguration, code}  = ctx.data.updateData(ctx.data.highlightConfiguration);
        // }

        ctx.data.style && b.style(me, ctx.data.style);
    },

    postInitDom(_ctx: IContext, me: b.IBobrilCacheNode) {
        hljs.highlightBlock(me.element);
    }
});