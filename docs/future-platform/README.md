# AFL Digital Learning Platform

A mobile-first Progressive Web App (PWA) for delivering AI Fluency Levels training to 500 million citizens by 2030.

## 🎯 Overview

The AFL Digital Learning Platform is a comprehensive learning management system designed to:
- Deliver AFL-0 through AFL-5 courses
- Support 22 Indian languages
- Work offline in low-connectivity areas
- Integrate with DIKSHA national platform
- Provide adaptive assessments and instant certification
- Scale to 10M+ concurrent users

## 🏗️ Architecture

```
platform/
├── frontend/          # React + TypeScript PWA
├── backend/           # Python FastAPI services
├── mobile/            # React Native app (future)
├── docs/              # Technical documentation
└── infrastructure/    # Deployment configs
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Python 3.11+
- PostgreSQL 15+
- Redis 7+

### Frontend Development
```bash
cd frontend
npm install
npm run dev
```

### Backend Development
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

## 📱 Features

### Phase 1 (MVP - Months 1-3)
- ✅ User registration and authentication
- ✅ AFL-0 and AFL-1 courses (Hindi + English)
- ✅ Video player with transcripts
- ✅ Basic MCQ assessments
- ✅ Progress tracking
- ✅ Certificate generation
- ✅ Mobile-responsive design

### Phase 2 (Scale - Months 4-6)
- [ ] AFL-2 content
- [ ] 11 language support
- [ ] Offline-first capabilities
- [ ] DIKSHA integration
- [ ] Adaptive assessments
- [ ] Gamification (points, badges, leaderboards)

### Phase 3 (Optimize - Months 7-9)
- [ ] AFL-3+ content
- [ ] AI-powered personalization
- [ ] Social learning (forums, groups)
- [ ] Facilitator portal
- [ ] Admin analytics dashboard

### Phase 4 (National Rollout - Months 10-12)
- [ ] All 22 languages
- [ ] SMS/USSD for feature phones
- [ ] Blockchain certificates
- [ ] AI chatbot support
- [ ] Full DIKSHA integration

## 🛠️ Technology Stack

### Frontend
- **Framework:** React 18 + TypeScript
- **State Management:** Redux Toolkit
- **UI Library:** Material-UI (MUI)
- **Offline Storage:** IndexedDB (Dexie.js)
- **Service Worker:** Workbox
- **i18n:** i18next
- **Build Tool:** Vite

### Backend
- **Framework:** Python FastAPI
- **Database:** PostgreSQL
- **Cache:** Redis
- **Queue:** Celery + RabbitMQ
- **Authentication:** JWT + OAuth2
- **API Docs:** OpenAPI (Swagger)

### Infrastructure
- **Cloud:** AWS / Google Cloud
- **CDN:** CloudFront / Cloud CDN
- **Container:** Docker + Kubernetes
- **CI/CD:** GitHub Actions
- **Monitoring:** Datadog / New Relic

## 📊 Success Metrics

### Adoption
- 10M registered users by Month 12
- 2M monthly active users
- 60%+ completion rate

### Performance
- < 3s page load on 3G
- 99.9% uptime
- 90+ Lighthouse score

### Equity
- 40%+ female users
- 25%+ rural users
- 25%+ SC/ST/OBC users

## 🔒 Security & Compliance

- HTTPS only (TLS 1.3)
- OWASP Top 10 compliance
- Data encryption at rest and in transit
- CACF (Constitutional AI Compliance Framework)
- GDPR/DPDP Act compliance

## 📖 Documentation

- [Architecture](./docs/architecture.md)
- [API Reference](./docs/api.md)
- [Deployment Guide](./docs/deployment.md)
- [Contributing](./docs/contributing.md)

## 🤝 Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for guidelines.

## 📄 License

See [LICENSE](../../LICENSE) for details.

## 🌟 Acknowledgments

Built with support from:
- Ministry of Electronics and IT (MeitY)
- DIKSHA National Platform
- Pilot districts and partners

---

**Version:** 0.1.0 (MVP)  
**Last Updated:** November 2025  
**Status:** In Development
