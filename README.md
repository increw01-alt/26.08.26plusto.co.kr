# 캐시리턴 · 한국상품권협회

WordPress 백업을 공개하지 않고 새로 구성한 정적 HTML 사이트입니다.

## 파일 구성

- `index.html`: 메인 페이지와 SEO 메타데이터
- `styles.css`: PC·태블릿·모바일 반응형 디자인
- `script.js`: 모바일 메뉴 동작
- `assets/`: 로고, 메인 이미지, Open Graph 이미지
- `fonts/`: Paperlogy 웹폰트
- `robots.txt`, `sitemap.xml`: 검색엔진 안내
- `404.html`: 잘못된 주소 안내 페이지
- `_headers`: Cloudflare 보안 및 캐시 헤더

## 로컬 확인

이 폴더에서 정적 웹 서버를 실행한 뒤 브라우저로 확인합니다.

```powershell
python -m http.server 8080
```

브라우저 주소: `http://localhost:8080/`

## Cloudflare Pages 연결

1. Cloudflare Pages에서 이 GitHub 저장소를 선택합니다.
2. 프레임워크는 `None`을 선택합니다.
3. 빌드 명령은 비워 둡니다.
4. 빌드 출력 디렉터리는 `.`로 지정합니다.
5. 배포 후 `plusto.co.kr` 도메인을 연결합니다.

## 보안 주의

`backup.sql`, `html.tar.gz`, WordPress 원본 폴더, `wp-config.php`는 공개 저장소에 올리지 않습니다.
