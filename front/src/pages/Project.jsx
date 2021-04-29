import React from 'react'
import { useParams } from 'react-router'
import ProjectDescription from '../components/organisms/ProjectDescription';
import useFetch from '../hooks/useFetch';
import { BASE_URI, getWorks } from '../utils/api';

const Project = (props) => {
  const {id} = useParams();
  console.log({id, props})
  const [loading, error, data] = useFetch(BASE_URI + getWorks + `/${id}`)
  if(error) {
    return <div>error</div>
  }
  if(loading) {
    return <div>loading…</div>
  }
  return (
    <div>
      {data && data.statusCode !== 200 && !!data._id && (
        <ProjectDescription
          title={data.title}
          text={data.description}
          pageLink={data._id}
          picture={BASE_URI + data.cover.url}
        />
      )}
    </div>
  )
}

export default Project
