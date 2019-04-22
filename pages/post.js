import Layout from '../components/MyLayout'
import {withRouter} from 'next/router'

const Page = withRouter(props => (
  <Layout>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </Layout>
))

export default Page
