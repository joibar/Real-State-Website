import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 12)
  
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@realestate.com' },
    update: {},
    create: {
      email: 'admin@realestate.com',
      passwordHash: hashedPassword,
      role: 'ADMIN',
      name: 'Admin User',
    },
  })

  console.log('Created admin user:', adminUser.email)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
