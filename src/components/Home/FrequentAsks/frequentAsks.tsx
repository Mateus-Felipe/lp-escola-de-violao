'use client'

import styles from './styles.module.scss'
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import chevrodown from '@/icons/chevrondown.svg'
import Image from 'next/image';

/**
* @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
*/

export default function FrequentAsks() {

    const AccordionItem = ({ header, ...rest }: any) => (
        <Item
            {...rest}
            header={
                <>
                    {header}
                    <Image className={styles.chevron} src={chevrodown} alt="Chevron Down" />
                </>
            }
            className={styles.item}
            buttonProps={{
                className: ({ isEnter }) =>
                    `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`
            }}
            contentProps={{ className: styles.itemContent }}
            panelProps={{ className: styles.itemPanel }}
        />
    );

    return (
        <div className={styles.container}>
            <h1>Perguntas <a>Frequentes</a> </h1>
            <div className={styles.accordion}>
                <Accordion transition transitionTimeout={250}>
                    <AccordionItem header="Por que este é o melhor?" initialEntered>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </AccordionItem>
                    <AccordionItem header="Os cursos terão novas aulas?">
                        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
                        erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.
                    </AccordionItem>
                    <AccordionItem header="Como posso tirar minhas dúvidas?">
                        Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
                        Fusce vulputate purus sed tempus feugiat.
                    </AccordionItem>
                    <AccordionItem header="Quanto tempo terei acesso há plataforma?">
                        Seu acesso é vitalício, inclusive você receberá todas as novas atualizações, aulas ao vivo,
                        documentos e arquivos. Incrível não?
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}