class FreelanceDocumentsController < ApplicationController
  before_action :set_freelance_document, only: [:show, :edit, :update, :destroy]

  # GET /freelance_documents
  # GET /freelance_documents.json
  def index
    @freelance_documents = FreelanceDocument.order('created_at DESC')
  end

  # GET /freelance_documents/1
  # GET /freelance_documents/1.json
  def show
  end

  # GET /freelance_documents/new
  def new
    @freelance_document = FreelanceDocument.new
  end

  # GET /freelance_documents/1/edit
  def edit
  end

  # POST /freelance_documents
  # POST /freelance_documents.json
  def create
    @freelance_document = FreelanceDocument.new(freelance_document_params)

    respond_to do |format|
      if @freelance_document.save
        format.html { redirect_to @freelance_document, notice: 'Freelance document was successfully created.' }
        format.json { render :show, status: :created, location: @freelance_document }
      else
        format.html { render :new }
        format.json { render json: @freelance_document.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /freelance_documents/1
  # PATCH/PUT /freelance_documents/1.json
  def update
    respond_to do |format|
      if @freelance_document.update(freelance_document_params)
        format.html { redirect_to @freelance_document, notice: 'Freelance document was successfully updated.' }
        format.json { render :show, status: :ok, location: @freelance_document }
      else
        format.html { render :edit }
        format.json { render json: @freelance_document.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /freelance_documents/1
  # DELETE /freelance_documents/1.json
  def destroy
    @freelance_document.destroy
    respond_to do |format|
      format.html { redirect_to freelance_documents_url, notice: 'Freelance document was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_freelance_document
      @freelance_document = FreelanceDocument.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def freelance_document_params
      params.require(:freelance_document).permit(:title, :description, :file_url, :image_url)
    end
end
