import * as React from "react"
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleRight
} from '@fortawesome/free-solid-svg-icons'

import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import DownloadDropdowns from "../../components/DownloadDropdowns"
import { loadLatestAssets } from '../../hooks';

const TemurinReleases = () => (
<Layout>
    <Seo title="Archive" />
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-10 col-md-8 mx-auto">
          <h1 className="fw-light">Archive</h1>
          <div className="row align-items-center pt-2">
            <div className="callout callout-default text-start">
              Please be aware that this archive contains old releases and intermediate builds created as a development step towards a <Link to="/temurin/releases">full release</Link>.
              Using old, superseded, or otherwise unsupported builds is not recommended. Intermediate builds are ephemeral, and may disappear in the future.
              <br/>
              <br/>
              The following notice applies to intermediate builds:
              <br/>
              "This is an intermediate build made available for testing purposes only. The code is untested and presumed incompatible with the Java SE specification.
              You should not deploy or write to this code, but instead use the tested and certified Java SE compatible version of the code that is available at <a href="https://adoptium.net">adoptium.net</a>.
              Redistribution of any Intermediate Build must retain this notice."
            </div>
            <div className="btn-group">
              <Link to="/temurin/releases" className="btn btn-primary m-3">
                Latest release <FontAwesomeIcon icon={faArrowCircleRight} size="1x" style={{ marginLeft: '.3em' }} />
              </Link>
              <Link to="/temurin/nightly" className="btn btn-secondary m-3">
                Nightly builds <FontAwesomeIcon icon={faArrowCircleRight} size="1x" style={{ marginLeft: '.3em' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <DownloadDropdowns updaterAction={loadLatestAssets}/>
    </section>
  </Layout>
)

export default TemurinReleases