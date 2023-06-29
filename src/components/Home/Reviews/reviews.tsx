import Image from 'next/image'
import styles from './styles.module.scss'
import Icon from '@/images/homem-violao.jpg'

export default function Reviews() {
    const reviewsData = [
        { icon: Icon, name: 'Joana Almeida', content: 'Eu tô ficando cada vez mais motivada com todas essa interação, eu quando fazia aula em outros lugares era muito tenso e desmotivador pagava horrores para me sentir perdida e sem vontade de continuar a fazer o que mais gosto que é a música.' },
        { icon: Icon, name: 'Mario Gonçalvez', content: 'Boa noite amigos. Só vim compartilhar aqui a minha alegria por ter praticado um tempinho durante todos os dias da semana, da segunda até a sexta' },
        { icon: Icon, name: 'Maria Lucia', content: 'Acho que essa escola não é elogiada o suficiente. é uma plataforma muito bem feita, de baixíssimo custo com um pessoal extremamente enérgico na organização. Quando parece que tá muito bom fica melhor. Parabés a todos de coração' },
        { icon: Icon, name: 'Alessandra Gomes', content: 'Uma verdadeira democratização da musica no Brasil, Muito obrigado professores, vocês merecem demais o resultado que estão tendo.' },
        { icon: Icon, name: 'Simas Turbo', content: 'O conteúdo é realmente ótimo, nunca aprendi tanto quando aprendi com eles, são duros no ensino e nos fazem realmente aprender. Vou continuar aprendendo com essas feras' },
        { icon: Icon, name: 'Leticia Barbosa', content: 'Nunca vi tanta qualidade em um só lugar, os professores ensinam com uma didática incrível. Realmente o título "Melhor Escola de Música do Brasil" não é atoa. Parabêns!' },
    ]
    return (
        <div className={styles.container}>
            <h1>Mais de <a>30 mil</a> alunos participando</h1>
            <h4>Já somos a<a> maior escola de música </a>online do Brasil</h4>
            <div className={styles.containerReview}>
                {
                    reviewsData.map(review => (
                        <div key={review.name} className={styles.reviewContent}>
                            <Image alt='foto' src={review.icon} loading={'lazy'} />
                            <div className={styles.reviewText}>
                                <div>
                                    <h1>
                                        {review.name}
                                    </h1>
                                    <p>{review.content}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}