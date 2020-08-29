class NotesController < ApplicationController
  def index
    notes = Note.all
    render json: notes, status: :ok
  end
end
