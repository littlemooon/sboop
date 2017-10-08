// @flow

import App from '../components/App'
import Header from '../components/Header'
import Submit from '../components/Submit'
import CrumbList from '../components/CrumbList'
import graphql from '../lib/graphql'

export default graphql(props => (
  <App>
    <Header pathname={props.url.pathname} />
    <Submit />
    <CrumbList />
  </App>
))
