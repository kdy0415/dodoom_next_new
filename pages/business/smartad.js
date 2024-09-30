import Layout from "../../components/layout";
import Head from "next/head";
import Link from 'next/link';
import Image from 'next/image';

export default function smartad() {
    return (
        <Layout>
            <Head>
                <title>돋움 DODOOM 사업내용 - 커머스플랫폼 구축</title>
            </Head>
            <div id="content">
                <div className="container">
                    <h2 className="page_group">Business</h2>
                    <h3 className="page_title">함께 미래를 혁신하며,<br/> 동반자로서의 가치를 실현합니다</h3>
                    <div className="cate_tap kr">
                        <Link href="/business/platform"><span>커머스플랫폼 구축</span></Link>
                        <Link href="/business/kiosk"><span>키오스크/자판기 시스템</span></Link>
                        <Link className="active" href="/business/smartad"><span>스마트 광고 자동 판매 스테이션</span></Link>
                        {/* <Link href="/business/blockchain"><span>블록체인 개발</span></Link> */}
                        <Link href="/business/service"><span>서비스</span></Link>
                    </div>

                    <div className="business_title">
                        <h4>스마트 광고 자동 판매 스테이션</h4>
                        <p>돋움은 자판기/키오스크 디자인 전문 노하우로 혁신과 실용적인  UI를 구현하고 있습니다. <br/>돋움의 미국 파트너 DJCG의 스마트 광고 스테이션 마트 진출 사업을 추진하고 있습니다.</p>
                    </div>

                    <div className="smartad_info">
                        <div class="smartad_logo"><img src="/images/djcg_logo.png"/></div>
                        <div class="txt1">DJ CONSULTING GROUP</div>
                        <div class="txt2">광고 영업 에이전시  미국 주식 상장 업무 전문</div>
                        <div class="txt3"><Link href="https://www.djcg.us" target="_blank">www.djcg.us</Link></div>
                    </div>
					<div className="smartad_cnt">
						<div className="img"><img src="/images/smart_ad_img.jpg"/></div>
						<div className="cnt">
							<div className="title">스마트 광고 스테이션 (3면) <br/>마트 진출 협력 사업</div>
							<div className="smart_checks">
								 <div className="item">유수의 마트 입구에 배치</div>
								 <div className="item">지역 업체 동영상 / 이미지  </div>
								 <div className="item">3면에 각기 다른 광고 포스팅</div>
								 <div className="item">본사가 직접 영업 관리</div>
							</div>
							<div className="smart_dots">
								<div className="tit">“투자 합작 프로그램” 라이센스 있는 전문가와 함께 합니다.</div>
								<div className="item">전문인을 통한 설치 장소 섭외</div>
								<div className="item">실시간 매출 정보 및 배당 액수 확인</div>
								<div className="item">본사 직영 섭외 및 관리</div>
								<div className="item">주식 상장 – 스톡 옵션 플랜</div>
							</div>
							<div className="contact">Contact Us : info@djcg.us</div>
						</div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}
