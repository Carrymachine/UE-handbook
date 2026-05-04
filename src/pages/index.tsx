import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Handbook for Unreal Engine 5.6+</p>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <p className={styles.heroDescription}>
            Epic의 `Programming with C++` 문서군을 바탕으로, Unreal Engine 5
            C++를 처음 배우는 개발자가 단계적으로 읽을 수 있게 다시 구성한
            한국어 핸드북입니다.
          </p>
          <div className={styles.actions}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              핸드북 시작하기
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/reflection/overview">
              리플렉션부터 보기
            </Link>
          </div>
        </div>
        <div className={styles.heroPanel}>
          <div className={styles.panelCard}>
            <p className={styles.panelLabel}>핵심 흐름</p>
            <ul className={styles.panelList}>
              <li>개발 환경과 빌드 파이프라인</li>
              <li>컨테이너와 델리게이트</li>
              <li>모듈, 자산, 설정 파일</li>
              <li>UObject, UPROPERTY, UFUNCTION</li>
            </ul>
          </div>
          <div className={styles.panelGrid}>
            <Link className={styles.gridCard} to="/docs/development-setup/overview">
              개발 환경
            </Link>
            <Link className={styles.gridCard} to="/docs/containers/overview">
              컨테이너
            </Link>
            <Link className={styles.gridCard} to="/docs/architecture/overview">
              아키텍처
            </Link>
            <Link className={styles.gridCard} to="/docs/reflection/overview">
              리플렉션
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="한국어로 정리한 Unreal Engine 5 C++ 핸드북">
      <HomepageHeader />
      <main>
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Reading Order</p>
              <Heading as="h2">핸드북 구성</Heading>
            </div>
            <div className={styles.trackGrid}>
              <article className={styles.trackCard}>
                <h3>1. 개발 환경</h3>
                <p>
                  Visual Studio, Xcode, VS Code, Live Coding, 클래스 생성,
                  컴파일 흐름을 먼저 정리합니다.
                </p>
              </article>
              <article className={styles.trackCard}>
                <h3>2. 언리얼식 C++ 문법</h3>
                <p>
                  코딩 표준, 컨테이너, 델리게이트, 포인터 모델처럼 일반 C++와
                  달라지는 지점을 빠르게 익힙니다.
                </p>
              </article>
              <article className={styles.trackCard}>
                <h3>3. 런타임 구조</h3>
                <p>
                  모듈, 자산 참조, 서브시스템, 문자열, 설정 파일과 같은 실전
                  아키텍처 주제를 묶어 설명합니다.
                </p>
              </article>
              <article className={styles.trackCard}>
                <h3>4. 리플렉션 시스템</h3>
                <p>
                  UObject, UPROPERTY, UFUNCTION, 메타데이터, 스마트 포인터까지
                  UE C++의 핵심 모델을 따로 다룹니다.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
