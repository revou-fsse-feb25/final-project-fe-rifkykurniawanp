import { Course, Module, Lesson } from '@/types/course'

const herbalLessons: { [moduleId: string]: Lesson[] } = {
  'herbal-intro': [
    {
      id: 'herbal-1',
      title: 'Introduction to Herbal Medicine',
      description: 'Learn the foundations and philosophy behind herbal medicine across cultures.',
      duration: '15 min',
      completed: false,
      type: 'video',
      videoUrl: 'https://example.com/herbal-intro',
      content: 'Herbal medicine has been used for thousands of years as a natural healing approach...',
      bookmarked: false,
      notes: ''
    },
    {
      id: 'herbal-2',
      title: 'Common Medicinal Herbs',
      description: 'Explore the most commonly used herbs and their therapeutic benefits.',
      duration: '20 min',
      completed: false,
      type: 'reading',
      content: 'Chamomile, peppermint, turmeric, and ginger are examples of widely used medicinal herbs...',
      bookmarked: false,
      notes: ''
    },
    {
      id: 'herbal-3',
      title: 'Safety and Contraindications',
      description: 'Understand the potential risks, side effects, and interactions of herbal products.',
      duration: '20 min',
      completed: false,
      type: 'video',
      videoUrl: 'https://example.com/herbal-safety',
      content: 'Even natural remedies can have interactions with medications or cause side effects...',
      bookmarked: false,
      notes: ''
    }
  ],
  'herbal-preparation': [
    {
      id: 'herbal-4',
      title: 'Making Herbal Teas and Infusions',
      description: 'Learn how to prepare herbal remedies using infusions and decoctions.',
      duration: '25 min',
      completed: false,
      type: 'practice',
      content: 'To prepare an infusion, pour hot water over dried herbs and steep...',
      bookmarked: false,
      notes: ''
    },
    {
      id: 'herbal-5',
      title: 'Tinctures and Extracts',
      description: 'Hands-on methods to create concentrated herbal formulas.',
      duration: '30 min',
      completed: false,
      type: 'reading',
      content: 'Tinctures are alcohol-based extracts offering a longer shelf life...',
      bookmarked: false,
      notes: ''
    },
    {
      id: 'herbal-6',
      title: 'Herbal Preparation Assessment',
      description: 'Evaluate your understanding of herbal preparation techniques.',
      duration: '30 min',
      completed: false,
      type: 'quiz',
      questions: [
        {
          id: 'q1',
          question: 'What is the typical solvent used in tincture preparation?',
          options: ['Water', 'Alcohol', 'Glycerin', 'Vinegar'],
          correctAnswer: 1,
          explanation: 'Alcohol is the most common solvent for tinctures due to its extraction efficiency.'
        },
        {
          id: 'q2',
          question: 'Which method is used for tough plant materials like roots?',
          options: ['Infusion', 'Decoction', 'Fermentation', 'Distillation'],
          correctAnswer: 1,
          explanation: 'Decoction is ideal for harder plant parts like roots or bark.'
        }
      ],
      bookmarked: false,
      notes: ''
    }
  ],
  'clinical-herbalism': [
    {
      id: 'herbal-7',
      title: 'Herbal Remedies for Digestive Health',
      description: 'Explore herbs beneficial for common digestive complaints.',
      duration: '25 min',
      completed: false,
      type: 'video',
      videoUrl: 'https://example.com/herbal-digestive',
      content: 'Peppermint, ginger, and fennel are commonly used for bloating, nausea, and IBS...',
      bookmarked: false,
      notes: ''
    },
    {
      id: 'herbal-8',
      title: 'Herbs for Immune Support',
      description: 'Understand adaptogens and immunomodulators like echinacea and elderberry.',
      duration: '25 min',
      completed: false,
      type: 'reading',
      content: 'Adaptogenic herbs help the body adapt to stress and support immunity...',
      bookmarked: false,
      notes: ''
    },
    {
      id: 'herbal-9',
      title: 'Case Study: Designing Herbal Protocols',
      description: 'Apply herbal knowledge in a practical clinical-style case scenario.',
      duration: '30 min',
      completed: false,
      type: 'practice',
      content: 'Based on the case of a patient with chronic fatigue, suggest an herbal support protocol...',
      bookmarked: false,
      notes: ''
    }
  ]
}

const herbalModules: Module[] = [
  {
    id: 'herbal-intro',
    title: 'Foundations of Herbalism',
    description: 'Understand the history, philosophy, and safety of herbal medicine.',
    duration: '55 min',
    difficulty: 'Easy',
    lessons: herbalLessons['herbal-intro']
  },
  {
    id: 'herbal-preparation',
    title: 'Preparation Techniques',
    description: 'Learn hands-on skills in creating herbal products.',
    duration: '85 min',
    difficulty: 'Medium',
    prerequisites: ['herbal-intro'],
    lessons: herbalLessons['herbal-preparation']
  },
  {
    id: 'clinical-herbalism',
    title: 'Applied Herbalism in Health',
    description: 'Explore clinical use of herbs in managing common conditions.',
    duration: '80 min',
    difficulty: 'Hard',
    prerequisites: ['herbal-intro', 'herbal-preparation'],
    lessons: herbalLessons['clinical-herbalism']
  }
]

export const herbalCourse: Course = {
  id: 'herbal-healing',
  title: 'Herbal Healing: Traditional Wisdom in Modern Practice',
  description: 'An evidence-informed course on the therapeutic use of herbs from preparation to clinical use.',
  instructor: 'Dr. Maya Fern',
  instructorBio: 'Dr. Maya Fern is a clinical herbalist and naturopath with over 20 years of experience integrating herbal medicine into modern healthcare settings.',
  instructorAvatar: '/instructors/maya-fern.jpg',
  rating: 4.9,
  students: 1625,
  duration: '5.5 hours',
  level: 'Intermediate',
  modules: herbalModules,
  icon: '🌿',
  color: 'bg-emerald-600',
  category: 'Herbal',
  price: 99,
  originalPrice: 139,
  tags: ['Herbal', 'Health', 'Botany', 'Preparation', 'Clinical'],
  whatYouWillLearn: [
    'Understand traditional herbal concepts and their cultural roots',
    'Prepare herbal teas, tinctures, and decoctions safely',
    'Recognize indications and contraindications of common herbs',
    'Apply herbal knowledge in clinical case scenarios',
    'Promote wellness using plant-based remedies'
  ],
  requirements: [
    'Interest in natural health and wellness',
    'Basic knowledge of biology is helpful',
    'Access to common herbs or herbal suppliers',
    'Notebook for practical notes and case logs'
  ],
  targetAudience: [
    'Health-conscious individuals',
    'Naturopaths and herbal enthusiasts',
    'Students of integrative or complementary medicine',
    'Professionals in wellness, yoga, or nutrition'
  ],
  language: 'English',
  lastUpdated: new Date('2024-02-10'),
  certificate: true
}
