# OXYGENIX LABS - Quick Start Guide

---

## 📋 Quick Commands

### Start Development Server
```bash
cd c:\Users\CS\Desktop\oxygenix-labs
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

### Install Dependencies (if needed)
```bash
npm install
```

---

## ✏️ Customization

### Change Colors (if needed)
Edit: `lib/constants/colors.ts` and `tailwind.config.ts`

## 🔧 Troubleshooting

### Port Already in Use
If port 3000 is busy:
```bash
# Kill the process or use a different port
npm run dev -- -p 3001
```

### Dependencies Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

---

