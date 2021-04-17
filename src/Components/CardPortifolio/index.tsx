import React, { useEffect, useState } from 'react';
import api from '../../services/api'
import Title from '../Title';
import { CardContainer } from './styles';
import { FiGithub } from 'react-icons/fi'
import { GoRepoClone } from 'react-icons/go'

const CardPortifolio: React.FC = () => {
    const [repos, setRepos] = useState<any[]>([]);
    const [paginate, setPaginate] = useState<number>(5)


    useEffect(() => {
        api.get('repos').then(success => {
            setRepos(success.data);
        })

    }, [])

    const seeMore = () => {
        setPaginate(paginate + paginate)
    }
    return (


        <CardContainer>
            <Title contenTitle=" Recents Repositories" >
                <FiGithub size={28} />
            </Title>
            <div className="card-repos">

                {repos.sort((a: number, b: number) => //@ts-ignore
                    new Date(b.created_at) - new Date(a.created_at))
                    .slice(0, paginate).map(repo => {
                        return (
                            <div className="card" key={repo.pushed_at}>
                                <a href={repo.clone_url} target="_blank" rel="noopener noreferrer" title="See on Github" >
                                    <h2> <FiGithub size={16} />  {repo.name}</h2>
                                    {/* <small>{new Date(repo.created_at).toLocaleDateString('PT-br')}</small> */}
                                    <p>{!repo.description ? '' : `${repo.description.substring(0, 80)} ...`}</p>
                                </a>
                                {!repo.language ? '' :
                                    <span className="label"> {repo.language} </span>
                                }
                                <div className="card-footer">

                                    <a href={repo.owner.url} target="_blank" rel="noopener noreferrer" className="card-footer-link">
                                        <img src={repo.owner.avatar_url} alt={repo.owner.login} />
                                    </a>
                                    <a href={repo.clone_url} target="_blank" rel="noopener noreferrer" title="Clone on Github" ><GoRepoClone size={20} /></a>
                                </div>
                            </div>
                        )
                    })}
            </div>

            {
                repos.length <= paginate ? <a href="https://github.com/rogeriorioli" className="button"> see more on github </a> :
                    <button type="button" onClick={seeMore}> SeeMore </button>
            }
        </CardContainer>
    );
}

export default CardPortifolio;