import React from 'react';


interface SeoProps {
    title: string,
    lang: string
    meta: Array<{
        content: string,
        name: string,
    }
    >,
    metaOg: Array<{
        property: string,
        content: string
    }>
}

const Seo: React.FC<SeoProps> = ({ title, lang, meta, metaOg }) => {
    return (
        <>
            <title>{title}</title>
            <meta lang={lang} />
            {meta.map(seo => {
                return (
                    <meta key={seo.name} name={seo.name} content={seo.content} />
                )
            })}

            {metaOg.map(ogprop => {
                return (
                    <meta key={ogprop.property} property={ogprop.property} content={ogprop.content} />
                )
            })}
        </>
    );
}

export default Seo;