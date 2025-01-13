import CollaborationForm from '../../components/collaboration-form'



export default function CollaborationPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Collaborate with Us</h1>
      <p className="text-lg text-center mb-8 max-w-2xl mx-auto">
        We're excited to work with talented individuals like you. Fill out the form below to start our collaboration journey.
      </p>
      <CollaborationForm />
    </div>
  )
}

